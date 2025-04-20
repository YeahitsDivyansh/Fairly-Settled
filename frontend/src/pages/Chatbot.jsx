import Chat from "@/components/Chat";
import Navbar from "@/components/ui/Navbar1/Navbar1";
import React from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import StaticChat from "@/components/StaticChat";
import Spinner from "@/components/Spinner";

const Chatbot = () => {
  const { userData, loading } = useUserAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {/* Blob Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="bg-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a2c4f8" />
              <stop offset="100%" stopColor="#f0e4ff" />
            </linearGradient>
          </defs>
          <g>
            <circle r="200" cx="20%" cy="30%" fill="url(#bg-gradient)" />
            <circle r="250" cx="80%" cy="60%" fill="url(#bg-gradient)" />
            <circle r="180" cx="50%" cy="80%" fill="url(#bg-gradient)" />
          </g>
        </svg>
      </div>
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>

      {/* Chat Area */}
      <div className="relative z-0">{userData ? <Chat /> : <StaticChat />}</div>
    </>
  );
};

export default Chatbot;
