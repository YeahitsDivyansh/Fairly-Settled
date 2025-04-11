import React, { useEffect, useRef } from 'react';
import './Chat.css'

const Chat = () => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <div className="flex flex-col h-full ">
            {/* <!-- Chat Messages --> */}
            <div class="w-full mx-auto pt-2 px-8 pb-28 flex flex-col flex-grow overflow-y-auto chat-container z-10">

                <div class="w-full mx-auto space-y-4">

                    {/* <!-- Receiver Message --> */}
                    <div class="flex items-start space-x-2">
                        <img src="./ai_lawyer.png"
                            alt="Abhiraj"
                            class="w-8 h-8 rounded-full object-cover" />
                        <div>
                            <div class="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md relative">
                                <p>Hi there! Welcome to my portfolio chat. Feel free to explore my work at
                                    <a href="https://abhirajk.vercel.app"
                                        target="_blank"
                                        class="text-blue-600 hover:text-blue-800">
                                        abhirajk.vercel.app
                                    </a>
                                </p>
                            </div>
                            <div class="flex items-center justify-between mt-1 text-gray-900 text-xs drop-shadow-sm">
                                <span>11:42 AM</span>
                                <div className='space-x-2'>
                                    <span class="material-icons text-sm cursor-pointer hover:text-blue-600">volume_up</span>
                                    <span class="material-icons text-sm cursor-pointer hover:text-blue-600">content_copy</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <!-- Sender Message --> */}
                    <div class="flex items-start justify-end space-x-2">
                        <div class="flex flex-col items-end">
                            <div class="bg-blue-600 text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md">
                                <p>Amazing work! I'm impressed with your projects and technical skills.</p>
                            </div>
                            <span class="text-gray-900 text-xs message-time drop-shadow-sm">11:43 AM</span>
                        </div>
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                            alt="User"
                            class="w-8 h-8 rounded-full object-cover" />
                    </div>



                    {/* reciever message */}
                    <div class="flex items-start space-x-2">
                        <img src="./ai_lawyer.png"
                            alt="Abhiraj"
                            class="w-8 h-8 rounded-full object-cover" />
                        <div>
                            <div class="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md relative">
                                <p>Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?</p>
                            </div>
                            <div class="flex items-center justify-between mt-1 text-gray-900 text-xs drop-shadow-sm">
                                <span>11:42 AM</span>
                                <div className='space-x-2'>
                                    <span class="material-icons text-sm cursor-pointer hover:text-blue-600">volume_up</span>
                                    <span class="material-icons text-sm cursor-pointer hover:text-blue-600">content_copy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start justify-end space-x-2">
                        <div class="flex flex-col items-end">
                            <div class="bg-blue-600 text-white rounded-lg rounded-tr-none p-3 shadow-md max-w-md">
                                <p>Amazing work! I'm impressed with your projects and technical skills.</p>
                            </div>
                            <span class="text-gray-900 text-xs message-time drop-shadow-sm">11:43 AM</span>
                        </div>
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                            alt="User"
                            class="w-8 h-8 rounded-full object-cover" />
                    </div>



                    {/* <!-- Typing Indicator --> */}
                    <div class="flex items-start space-x-2">
                        <img src="./ai_lawyer.png"
                            alt="Abhiraj"
                            class="w-8 h-8 rounded-full object-cover" />
                        <div class="bg-white rounded-lg rounded-tl-none p-3 shadow-md">
                            <div class="typing-indicator">
                                <span>•</span>
                                <span>•</span>
                                <span>•</span>
                            </div>
                        </div>
                    </div>

                    {/* This will trigger scroll */}
                    <div ref={bottomRef} />
                </div>
            </div>

            {/* <!-- Chat Input --> */}
            <div class="fixed bottom-0 left-0 w-full z-50 bg-white border-t p-4">
                <div class="max-w-4xl mx-auto flex items-center space-x-4">
                    <button class="p-2 text-gray-500 hover:text-gray-700 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zm6 10a6 6 0 01-12 0m12 0v2a6 6 0 01-6 6m0 0v4m0-4H9m3 0h3" />
                        </svg>
                    </button>
                    <label class="p-2 text-gray-500 hover:text-gray-700 transition cursor-pointer">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        <input type="file" class="hidden" onChange={(e) => console.log(e.target.files)} />
                    </label>
                    <input type="text" placeholder="Type your message..."
                        class="flex-1 p-2 border rounded-full focus:outline-none focus:border-blue-500" />
                    <button class="w-11 h-11 flex items-center justify-center text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
                        <span class="material-icons text-xl">gavel</span>
                    </button>

                </div>
            </div>


        </div>
    )
}

export default Chat
