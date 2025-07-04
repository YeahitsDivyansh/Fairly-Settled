import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    serverTimestamp,
    orderBy
} from "firebase/firestore";
import { db } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useUserAuth } from "@/context/UserAuthContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false);//for loading AI response  
    const [chats, setChats] = useState([]);
    const [selected, setSelected] = useState(null);
    const [createLod, setCreateLod] = useState(false); //for loading create new chat
    const [loading, setLoading] = useState(false);//for fetching messages for selected chat
    const { userData } = useUserAuth();
    const [chatsLoading, setChatsLoading] = useState(true); //for loading all conversations


    const fetchResponse = async () => {
        if (!prompt.trim()) return alert("Write prompt");
        if (!selected) return alert("No chat selected");

        const userMsg = {
            sender: "user",
            text: prompt,
            time: serverTimestamp(),
        };

        const aiMsg = {
            sender: "ai",
            text: "",
            time: serverTimestamp(),
        };

        try {
            setPrompt("");
            // Store user's message in subcollection
            const msgRef = collection(db, "Chats", selected, "Conversation");
            // Add user message to Firestore
            await addDoc(msgRef, userMsg);

            //  Immediately update UI
            setMessages((prev) => [...prev, userMsg]);

            setNewRequestLoading(true);

            // Get AI response
            const res = await axios.post(
                "https://legalchatbot-server-992692416004.us-central1.run.app/chat",
                { query: prompt },
                { headers: { "Content-Type": "application/json" } }
            );

            aiMsg.text = res.data.response;
            await addDoc(msgRef, aiMsg);


            // Add AI response to state too
            setMessages((prev) => [...prev, aiMsg]);

            // Update chat metadata
            await updateDoc(doc(db, "Chats", selected), {
                updatedAt: serverTimestamp(),
            });

            // fetchMessages(); // Refresh UI
        } catch (error) {
            console.error("API error:", error);
            alert("Something went wrong");
        } finally {
            
            setNewRequestLoading(false);
        }
    };

    const fetchChats = async () => {
        if (!userData) return;
        setChatsLoading(true);
        try {
            const q = query(
                collection(db, "Chats"),
                where("userId", "==", userData.id),
                orderBy("updatedAt", "desc") 
            );
            const snapshot = await getDocs(q);
            const chatData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setChats(chatData);
            if (!selected && chatData[0]) setSelected(chatData[0].id);
            else if (chatData.length === 0) setSelected(null);
        } catch (err) { 
            console.error(err);
        }
        setChatsLoading(false);
    };

    const createChat = async () => {
        if (!userData) return;
        setCreateLod(true);
        try {
            const chatDoc = await addDoc(collection(db, "Chats"), {
                userId: userData.id,
                username: userData.username,
                chatname: "New Chat",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            setSelected(chatDoc.id);
            fetchChats();
            setMessages([]);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setCreateLod(false);
        }
    };

    const fetchMessages = async () => {
        if (!selected) return;
        setLoading(true);
        try {
            const msgRef = collection(db, "Chats", selected, "Conversation");
            const q = query(msgRef, orderBy("time", "asc"));
            const snapshot = await getDocs(q);
            const msgs = snapshot.docs.map((doc) => doc.data());
            setMessages(msgs);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteChat = async (id) => {
        try {
            await deleteDoc(doc(db, "Chats", id));
            toast.success("Chat deleted");
            if (id === selected) {
                setSelected(null);
                setMessages([]);
            }
            fetchChats();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };

    const editChatName = async (id, newName) => {
        try {
            await updateDoc(doc(db, "Chats", id), {
                chatname: newName,
            });
            await fetchChats(); // Refresh chat list with new name
            toast.success("Chat name updated");
        } catch (err) {
            console.error(err);
            toast.error("Failed to update chat name");
        }
    };

    useEffect(() => {
        fetchChats();
    }, [userData]);

    useEffect(() => {
        fetchMessages();
    }, [selected]);

    

    return (
        <ChatContext.Provider
            value={{
                fetchResponse,
                messages,
                prompt,
                setPrompt,
                newRequestLoading, //for ai response 
                chats,
                createChat,
                createLod,
                selected,
                setSelected,
                loading,//for loading messages for selected chat
                deleteChat,
                fetchChats,
                editChatName,
                chatsLoading //for loading all chats/conversations
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const ChatData = () => useContext(ChatContext);
