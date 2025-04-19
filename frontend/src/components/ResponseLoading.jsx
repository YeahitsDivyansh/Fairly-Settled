import React from 'react'

const ResponseLoading = () => {
    return (
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
    )
}

export default ResponseLoading
