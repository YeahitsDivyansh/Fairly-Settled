import React from 'react'
import { useNavigate } from "react-router-dom";


const LoginButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate('/phonesignin')}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-[#5C7285] hover:bg-[#4a5c6b] shadow-md transition duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                />
            </svg>
            Login
        </button>
    )
}

export default LoginButton
