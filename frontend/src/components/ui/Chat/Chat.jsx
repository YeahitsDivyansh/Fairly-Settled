import React, { useEffect, useRef } from "react";

const Chat = () => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center relative bg-cover object-contain bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/drawings-about-legal-profession_23-2151190600.jpg?t=st=1744541400~exp=1744545000~hmac=59179d9ba0f8de8e6013c150f0755309aadbe1079c7ce2254d4545b76b9ae3a0&w=1380')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30 z-0" />

      {/* Chat Messages */}
      <div className="relative z-10 w-full mx-auto pt-2 px-8 pb-28 flex flex-col flex-grow overflow-y-auto">
        <div className="w-full mx-auto space-y-4">
          {/* Receiver Message */}
          <div className="flex items-start space-x-2">
            <img
              src="./ai_lawyer.png"
              alt="AI"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md relative">
                <p>
                  Hi there! Welcome to my portfolio chat. Feel free to explore
                  my work at{" "}
                  <a
                    href="https://abhirajk.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    abhirajk.vercel.app
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-between mt-1 text-white text-xs drop-shadow-sm">
                <span className="text-black">11:42 AM</span>
                <div className="space-x-2">
                  <span className="material-icons text-sm cursor-pointer text-black hover:text-blue-300">
                    volume_up
                  </span>
                  <span className="material-icons text-sm cursor-pointer text-black hover:text-blue-300">
                    content_copy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sender Message */}
          <div className="flex items-start justify-end space-x-2">
            <div className="flex flex-col items-end">
              <div className="bg-[#67AE6E] text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md">
                <p>
                  Amazing work! I'm impressed with your projects and technical
                  skills.
                </p>
              </div>
              <span className="text-black text-xs drop-shadow-sm">
                11:43 AM
              </span>
            </div>
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {/* Another Receiver Message */}
          <div className="flex items-start space-x-2">
            <img
              src="./ai_lawyer.png"
              alt="AI"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md relative">
                <p>
                  Thank you! I specialize in full-stack development using modern
                  technologies. Would you like to discuss a potential
                  collaboration?
                </p>
              </div>
              <div className="flex items-center justify-between mt-1 text-white text-xs drop-shadow-sm">
                <span className="text-black">11:42 AM</span>
                <div className="space-x-2">
                  <span className="material-icons text-sm cursor-pointer text-black hover:text-blue-300">
                    volume_up
                  </span>
                  <span className="material-icons text-sm cursor-pointer text-black hover:text-blue-300">
                    content_copy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Repeating Sender Message */}
          <div className="flex items-start justify-end space-x-2">
            <div className="flex flex-col items-end">
              <div className="bg-[#67AE6E] text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md">
                <p>
                  Amazing work! I'm impressed with your projects and technical
                  skills.
                </p>
              </div>
              <span className="text-black text-xs drop-shadow-sm">
                11:43 AM
              </span>
            </div>
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {/* Typing Indicator */}
          <div className="flex items-start space-x-2">
            <img
              src="./ai_lawyer.png"
              alt="AI"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-max">
              <div className="flex space-x-1 animate-pulse">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Scroll Ref */}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="fixed bottom-0 left-0 w-full z-20 bg-[#6F826A] border-t p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <button className="p-2 text-white hover:text-gray-300 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zm6 10a6 6 0 01-12 0m12 0v2a6 6 0 01-6 6m0 0v4m0-4H9m3 0h3"
              />
            </svg>
          </button>
          <label className="p-2 text-white hover:text-gray-300 transition cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <input
              type="file"
              className="hidden"
              onChange={(e) => console.log(e.target.files)}
            />
          </label>
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 bg-transparent border border-white text-white rounded-full focus:outline-none focus:ring focus:ring-white/50"
          />
          <button className="w-11 h-11 flex items-center justify-center text-white bg-[#67AE6E] rounded-full hover:bg-blue-700 transition">
            <span className="material-icons text-xl">gavel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
