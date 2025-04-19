import React from 'react'
import { useState } from 'react';
import { FolderPlus } from 'lucide-react';
import { ChatData } from '@/context/ChatContext';
import { useUserAuth } from "@/context/UserAuthContext";
import toast from "react-hot-toast";




const NewChat = () => {
    const { createChat} = ChatData();
    const { userData } = useUserAuth();
    
    const [creating, setCreating] = useState(false);
    const handleNewChat = async () => {
        setCreating(true);
        await createChat();
        setCreating(false);
    };
    return (
        <button
        onClick={() => {
            if (userData) {
              handleNewChat();
            } else {
              toast.error("Please login to create & save chats");
            }
          }}
            disabled={creating}
            className={`flex items-center gap-2 px-2 py-2 rounded-md text-white transition duration-200 ${creating ? "bg-gray-500 cursor-not-allowed" : "bg-[#5C7285] hover:bg-[#4a5c6b]"
                }`}
        >
            <FolderPlus className="h-5 w-5" />
            {creating ? "Creating..." : "New Chat"}
        </button>
    )
}

export default NewChat
