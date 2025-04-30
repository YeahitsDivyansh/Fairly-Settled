import Lawyer from '@/components/Lawyer'
import React from 'react'

const Lawyers = () => {
    const lawyerData = {
        name: 'Advocate Rachana Gupta',
        image: 'https://media.istockphoto.com/id/1326920136/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=QJq9yzU_-JYdJFRmHiWs82RXLkFJinVey4Jkc4t84zc=',
        location: 'Gurunanakpura, Bhopal',
        experience: 25,
        languages: ['English', 'Hindi'],
        rating: 97,
        reviews: 2406,
        practiceAreas: ['Cheque Bounce', 'Civil', 'Divorce', 'Domestic Violence', 'Fraud Case', 'Litigation', 'NCLT', 'Property', 'Recovery', 'RERA', 'Succession Certificate']
    };
    return (
        <div>
            <div className="bg-[#9db6d9bd] px-4 py-12 mx-auto">
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

                <h1 className="text-[#1F2937] text-center text-6xl md:text-5xl font-extrabold leading-tight">
                    Consult Best Lawyers{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                        Near You
                    </span>
                </h1>

                <div className="flex flex-wrap justify-center gap-3 mt-7 mb-9">
                    <Lawyer lawyer={lawyerData} />
                    <Lawyer lawyer={lawyerData} />
                    <Lawyer lawyer={lawyerData}/>
                </div>
            </div>
        </div>
    )
}

export default Lawyers
