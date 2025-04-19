import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import AIChat from "@/components/AIChat";
import UserChat from "@/components/UserChat";
import LoadingChat from "@/components/ResponseLoading";
import NewChat from "./NewChat";
import LoginButton from "./LoginButton";

const StaticChat = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [newRequestLoading, setNewRequestLoading] = useState(false);
  const bottomRef = useRef(null);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async () => {
    if (!prompt.trim()) return alert("Please enter a message");

    const userMsg = { sender: "user", text: prompt, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setNewRequestLoading(true);

    try {
      const res = await axios.post(
        "https://qnachatbot-992692416004.us-central1.run.app/text-chat",
        { input_text: prompt },
        { headers: { "Content-Type": "application/json" } }
      );
      const aiMsg = { sender: "ai", text: res.data.response_text, time: new Date() };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      alert("Error fetching AI response");
    } finally {
      setNewRequestLoading(false);
    }
  };




  return (
    <div className={`bg-[#9db6d9bd] flex flex-col ${messages.length === 0 ? "h-[calc(100vh-5rem)]" : "min-h-screen"} items-center relative`}>
      <div className="absolute inset-0 bg-opacity-30 z-0" />

      {/* Chat Messages */}
      <div className="relative z-10 w-full mx-auto pt-22 px-8 pb-28 flex flex-col flex-grow overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 py-10 space-y-3 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              How can I assist you today?
            </h2>
            <p className="text-base font-medium text-gray-600 max-w-md leading-relaxed">
              Ask your legal questions and get AI-powered advice instantly. Type your query below to begin the conversation.
            </p>
            <p className="text-xl font-semibold text-gray-700">
              Please login to <span className="text-[#5C7285]">save your chats</span>
            </p>
            <LoginButton />
          </div>

        ) : (
          <>
            {messages.map((msg, idx) => (
              <div key={idx} className="w-full mx-auto space-y-4">
                {msg.sender === "ai" && <AIChat msg={msg} />}
                {msg.sender === "user" && <UserChat msg={msg} />}
              </div>
            ))}
            {newRequestLoading && <LoadingChat />}
            <div ref={bottomRef} />
          </>
        )}
      </div>

      {/* Chat Input */}
      <div className="fixed bottom-0 left-0 w-full z-20 bg-[#1F2937] border-t p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <NewChat />
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 bg-transparent border border-white text-white rounded-full"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className="w-11 h-11 flex items-center justify-center text-white bg-[#5C7285] rounded-full"
          >
            <span className="material-icons text-xl">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StaticChat
