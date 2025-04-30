import React from 'react';
import { Briefcase, Languages, MapPin, Scale, ThumbsUp } from 'lucide-react'; // Imported icons
import ReviewCard from '@/components/ReviewCard';
import ReviewForm from '@/components/ReviewForm';
import { useNavigate } from 'react-router-dom';
const LawyerProfile = () => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            {/* Blob Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
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

            {/* Main Content */}
            <div className="bg-[#9db6d9bd] px-4 py-2 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 border-2 border-blue-400">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        <img
                            src="https://media.istockphoto.com/id/1326920136/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=QJq9yzU_-JYdJFRmHiWs82RXLkFJinVey4Jkc4t84zc="
                            alt="Advocate Ashok Gupta"
                            className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow-md mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-blue-700 text-2xl font-bold">Advocate Rachana Gupta</h2>
                            <div className="flex items-center mt-1">
                                <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                    <ThumbsUp size={14} className="text-white" />
                                    <span>97</span>
                                </div>
                            </div>
                        </div>
                        <button
                        onClick={()=>navigate("/appointment")}
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-md font-medium rounded-full shadow-sm transition transform hover:-translate-y-1 w-full md:w-auto text-center mr-5">
                            
                                Schedule<br /> Appointment
                            
                        </button>
                    </div>
                    <hr className="my-6" />

                    {/* Info */}

                    <div className="flex flex-row gap-6 justify-evenly">
                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <MapPin size={18} className="text-blue-500" />
                            <span>Gurunanakpura, Bhopal</span>
                        </div>

                        {/* Experience */}
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <Briefcase size={18} className="text-blue-500" />
                            <span>25 years experience</span>
                        </div>

                        {/* Languages */}
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <Languages size={18} className="text-blue-500" />
                            <span>English, Hindi</span>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="flex items-center justify-between text-gray-700 font-semibold mb-4">
                        {/* Practice Areas Title */}
                        <p className="flex items-center">
                            <span className="text-lg font-semibold text-blue-700 mr-2">Practice Areas:</span>
                            <span className="text-sm leading-snug">
                                Cheque Bounce, Civil, Divorce, Domestic Violence, Fraud Case, Litigation, NCLT, Property, Recovery, RERA, Succession Certificate
                            </span>
                        </p>
                    </div>

                    <hr className="my-6" />

                    {/* Description */}
                    <div className="space-y-4 text-gray-700">
                        <p>
                            Advocate Ashok Gupta has been practicing and handling cases independently with a result-oriented approach, both professionally and ethically, and has now acquired many years of professional experience in providing legal consultancy and advisory services.
                        </p>
                        <p>
                            Advocate Ashok provides services in various fields of Civil Matters, Cheque Bounce Matters, Divorce Matters, Property Matters, Recovery Matters and drafting and vetting of various agreements and documents.
                        </p>
                        <p>
                            Advocate Ashok enrolled with the Bar Council of Madhya Pradesh in 2000. He is also a member of Bhopal Bar Association.
                        </p>
                    </div>
                </div>

                <div className="my-12 max-w-5xl mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-3 ml-3">Popular Reviews : </h1>

                    {/* Review Card */}
                    <div className='flex flex-col gap-4'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewForm />
                    </div>

                </div>


            </div>


        </div>
    );
};

export default LawyerProfile;
