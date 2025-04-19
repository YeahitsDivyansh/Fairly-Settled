import React from 'react';

const UserChat = ({ msg }) => {
  return (
    <div className="flex items-start justify-end space-x-2 w-full px-2">
      <div className="flex flex-col items-end max-w-[75%] sm:max-w-[65%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="bg-[#5C7285] text-white rounded-lg rounded-tr-none p-3 shadow-md w-full break-words whitespace-pre-wrap">
          <p>{msg.text}</p>
        </div>
        <div className="flex items-center justify-between mt-1 text-xs drop-shadow-sm">
          <span className="text-black">
            {msg.time?.toDate
              ? msg.time.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : ""}
          </span>
        </div>
      </div>
      <img
        src="/profile.png"
        alt="User"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  );
};

export default UserChat;
