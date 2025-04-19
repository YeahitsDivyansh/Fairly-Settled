import React, { useState } from "react";
import {
    IconButton,
    Drawer,
    Card,
} from "@material-tailwind/react";
import { ChevronLeft, PanelRightClose } from 'lucide-react';
import { ChatData } from "@/context/ChatContext";
import NewChat from "./NewChat";
import { useUserAuth } from "@/context/UserAuthContext";
import ChatHistory from "./ChatHistory";
import LoginButton from "./LoginButton";


export function Sidebar() {
    const { userData } = useUserAuth();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const { chats } = ChatData();

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);




    return (
        <>
            <button onClick={openDrawer}>
                <PanelRightClose className="h-8 w-8 stroke-2 text-white hover:cursor-pointer" />
            </button>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <button className="absolute top-2 right-2" onClick={closeDrawer}>
                        <ChevronLeft
                            className="h-8 w-8 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-600 rounded-full p-1 transition duration-200 cursor-pointer"
                        />
                    </button>

                    <div className="mb-1 flex items-center justify-center p-4">
                        <img
                            src="/fairlySettledLogo.jpg"
                            alt="brand"
                            className="h-28 w-28 rounded-4xl object-cover"
                        />
                    </div>

                    {/* <div className="relative w-full max-w-lg mx-auto">
                        <input
                            className="w-full py-2 px-4 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="search"
                            placeholder="Search"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-400 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                            </svg>
                        </button>
                    </div> */}

                    <div className="flex my-1 w-full items-center justify-center">
                        {userData ? <NewChat /> : <LoginButton />}
                    </div>

                    <div className="mt-4 space-y-2 overflow-auto h-full pr-2">
                        {userData && (
                            <h2 className="text-lg font-semibold text-gray-800 px-2 mb-2">
                                Chat History
                            </h2>
                        )}
                        {userData ? (
                            chats.map((chat) => <ChatHistory key={chat.id} chat={chat} />)
                        ) : (
                            <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-md border border-gray-300 px-6 py-4 text-center text-gray-700 text-base font-medium">
                                <p className="flex items-center justify-center gap-2">
                                    <span className="material-icons text-[#5C7285]">lock</span>
                                    Please login to see your chat history
                                </p>
                            </div>
                        )}
                    </div>
                </Card>
            </Drawer>
        </>
    );
}
