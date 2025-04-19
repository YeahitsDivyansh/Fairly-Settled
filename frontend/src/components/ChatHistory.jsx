import React from 'react'
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { SquareCheckBig } from 'lucide-react';
import { ChatData } from '@/context/ChatContext';
import { useState } from 'react';

const ChatHistory = ({ chat }) => {
    const { selected,
        setSelected,
        deleteChat,
        editChatName
    } = ChatData();
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");


    const handleChatClick = (id) => {
        setSelected(id);
        closeDrawer();
    };


    const handleDelete = (e, id) => {
        e.stopPropagation();
        deleteChat(id);
    };

    const handleEditStart = (e, chat) => {
        e.stopPropagation();
        setEditId(chat.id);
        setEditValue(chat.chatname);
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleEditSave = (e, id) => {
        e.stopPropagation();
        if (editValue.trim()) {
            editChatName(id, editValue.trim());
        }
        setEditId(null);
    };

    return (
        <div
            key={chat.id}
            className={`flex items-center justify-between p-2 rounded-md text-sm font-medium border border-gray-400 hover:bg-blue-50 ${selected === chat.id ? "bg-blue-100 font-semibold" : "bg-white"
                }`}
        >
            <div
                onClick={() => handleChatClick(chat.id)}
                className="cursor-pointer flex-1 truncate whitespace-nowrap overflow-hidden"
                title={chat.chatname}
            >
                {editId === chat.id ? (
                    <input
                        value={editValue}
                        onChange={handleEditChange}
                        className="w-full border border-gray-300 rounded px-1 py-0.5 text-sm"
                        autoFocus
                    />
                ) : (
                    chat.chatname
                )}
            </div>

            <div className="flex items-center ml-2">
                {editId === chat.id ? (
                    <button
                        onClick={(e) => handleEditSave(e, chat.id)}
                        className="text-green-600 hover:text-white bg-green-100 hover:bg-green-600 transition-all duration-200 p-1 rounded-md shadow-sm mr-1"
                        title="Save Chat Name"
                    >
                        <SquareCheckBig className="w-4 h-4" />
                    </button>
                ) : (
                    <button
                        onClick={(e) => handleEditStart(e, chat)}
                        className="text-gray-600 hover:text-white bg-gray-200 hover:bg-blue-500 transition-all duration-200 p-1 rounded-md shadow-sm"
                        title="Edit Chat Name"
                    >
                        <Pencil className="w-4 h-4" />
                    </button>
                )}

                <button
                    onClick={(e) => handleDelete(e, chat.id)}
                    className="text-red-600 hover:text-white bg-red-100 hover:bg-red-600 transition-all duration-200 p-1 rounded-md shadow-sm ml-1"
                    title="Delete Chat"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default ChatHistory
