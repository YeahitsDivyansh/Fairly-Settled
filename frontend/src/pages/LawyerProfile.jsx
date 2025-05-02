import React, { useState, useEffect } from 'react'
import { Briefcase, Languages, MapPin, ThumbsUp, Phone, Mail, Info } from 'lucide-react'; // Added more icons
import ReviewCard from '@/components/ReviewCard';
import ReviewForm from '@/components/ReviewForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// const lawyers = [
//     {
//         name: 'rachana-gupta',
//         fullName: 'Advocate Rachana Gupta',
//         image: 'data:image/jpeg;base64,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',
//         location: 'Gurunanakpura, Bhopal',
//         experience: 25,
//         phone: '+91 98765 43210',
//         whatsapp: '+91 98765 43210',
//         email: 'lawyer@example.com',
//         languages: ['English', 'Hindi'],
//         rating: 97,
//         practiceAreas: [
//             'Cheque Bounce', 'Civil', 'Divorce', 'Domestic Violence', 'Fraud Case',
//             'Litigation', 'NCLT', 'Property', 'Recovery', 'RERA', 'Succession Certificate'
//         ],
//         description: [
//             'Advocate Rachana Gupta has been practicing and handling cases independently with a result-oriented approach, both professionally and ethically, and has now acquired many years of professional experience in providing legal consultancy and advisory services.',
//             'She provides services in various fields of Civil Matters, Cheque Bounce Matters, Divorce Matters, Property Matters, Recovery Matters and drafting and vetting of various agreements and documents.',
//             'Advocate Rachana enrolled with the Bar Council of Madhya Pradesh in 2000. She is also a member of Bhopal Bar Association.'
//         ],
//         reviews: [
//             {
//                 name: 'Anjali Mehta',
//                 date: '2024-12-10',
//                 review: 'Advocate Rachana was professional, empathetic, and highly knowledgeable. She helped me resolve a family legal dispute smoothly.'
//             },
//             {
//                 name: 'Rahul Verma',
//                 date: '2025-01-22',
//                 review: 'Very satisfied with the legal consultation. Rachana is clear in her communication and transparent in her approach.'
//             },
//             {
//                 name: 'Sneha Kapoor',
//                 date: '2025-03-05',
//                 review: 'I appreciate the way she handled my case with dedication. She made a stressful process much easier to navigate.'
//             },
//             {
//                 name: 'Vikram Desai',
//                 date: '2025-04-14',
//                 review: 'Great experience working with her. She has deep knowledge in property law and guided me at every step.'
//             }
//         ]
//     },
//     {
//         name: 'suresh-mehta',
//         fullName: 'Advocate Suresh Mehta',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfaobH_r_RYm-evYbZX_jvzqfkK4q-5UFNA&s',
//         location: 'MG Road, Indore',
//         experience: 18,
//         phone: '+91 98765 43210',
//         whatsapp: '+91 98765 43210',
//         email: 'lawyer@example.com',
//         languages: ['English', 'Hindi', 'Marathi'],
//         rating: 94,
//         practiceAreas: [
//             'Criminal Law', 'Cybercrime', 'Litigation', 'Bail Matters',
//             'Family Law', 'Consumer Court'
//         ],
//         description: [
//             'Advocate Suresh Mehta is a highly skilled criminal lawyer who has represented clients in a variety of high-profile cases with integrity and persistence.',
//             'He also offers consultancy on cybercrime and bail matters with a deep understanding of the legal framework and timely response.',
//             'Suresh is known for his aggressive courtroom strategy and compassionate client interaction, and is a key member of the Indore Bar Council.'
//         ],
//         reviews: [
//             {
//                 name: 'Anjali Mehta',
//                 date: '2024-12-10',
//                 review: 'Advocate Rachana was professional, empathetic, and highly knowledgeable. She helped me resolve a family legal dispute smoothly.'
//             },
//             {
//                 name: 'Rahul Verma',
//                 date: '2025-01-22',
//                 review: 'Very satisfied with the legal consultation. Rachana is clear in her communication and transparent in her approach.'
//             },
//             {
//                 name: 'Sneha Kapoor',
//                 date: '2025-03-05',
//                 review: 'I appreciate the way she handled my case with dedication. She made a stressful process much easier to navigate.'
//             },
//             {
//                 name: 'Vikram Desai',
//                 date: '2025-04-14',
//                 review: 'Great experience working with her. She has deep knowledge in property law and guided me at every step.'
//             }
//         ]
//     },
//     {
//         name: 'priya-sharma',
//         fullName: 'Advocate Priya Sharma',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWhRpGoAK8444Iq1Qw0f8icKICu1j3VUZvg&s',
//         location: 'Sector 62, Noida',
//         experience: 12,
//         phone: '+91 98765 12345',
//         whatsapp: '+91 98765 12345',
//         email: 'lawyer123@example.com',
//         languages: ['English', 'Hindi', 'Punjabi'],
//         rating: 91,
//         practiceAreas: [
//             'Corporate Law', 'Startup Advisory', 'Contract Drafting',
//             'IPR', 'Arbitration', 'Employment Law'
//         ],
//         description: [
//             'Advocate Priya Sharma specializes in corporate and startup law with a keen focus on compliance, intellectual property, and investor agreements.',
//             'She has helped over 100 startups set up legal structures, draft contracts, and handle employment disputes.',
//             'Priya is also a respected speaker on legal tech and is a visiting lecturer at various law colleges in Delhi NCR.'
//         ],
//         reviews: [
//             {
//                 name: 'Anjali Mehta',
//                 date: '2024-12-10',
//                 review: 'Advocate Rachana was professional, empathetic, and highly knowledgeable. She helped me resolve a family legal dispute smoothly.'
//             },
//             {
//                 name: 'Rahul Verma',
//                 date: '2025-01-22',
//                 review: 'Very satisfied with the legal consultation. Rachana is clear in her communication and transparent in her approach.'
//             },
//             {
//                 name: 'Sneha Kapoor',
//                 date: '2025-03-05',
//                 review: 'I appreciate the way she handled my case with dedication. She made a stressful process much easier to navigate.'
//             },
//             {
//                 name: 'Vikram Desai',
//                 date: '2025-04-14',
//                 review: 'Great experience working with her. She has deep knowledge in property law and guided me at every step.'
//             }
//         ]
//     }
// ];

const LawyerProfile = () => {
    const [lawyers, setLawyers] = useState([]);

    const fetchLawyers = async () => {
        const querySnapshot = await getDocs(collection(db, 'lawyers'));
        const lawyers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return lawyers;
    };

    useEffect(() => {
        fetchLawyers().then(setLawyers);
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();

    const lawyer = lawyers.find(lawyer => lawyer.id === id);

    if (!lawyer) {
        return (
            <div className="text-center mt-12 text-red-600 font-semibold">
                Lawyer not found.
            </div>
        );
    }

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
                            src={lawyer.image}
                            alt={lawyer.fullName}
                            className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow-md mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-blue-700 text-2xl font-bold">{lawyer.fullName}</h2>
                            <div className="flex items-center mt-1">
                                <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                    <ThumbsUp size={14} className="text-white" />
                                    <span>{lawyer.rating}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/appointment")}
                            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-md font-medium rounded-full shadow-sm transition transform hover:-translate-y-1 w-full md:w-auto text-center mr-5">

                            Schedule<br /> Appointment

                        </button>
                    </div>

                    <hr className="my-6" />
                    {/* Info */}
                    <div className="flex flex-row justify-evenly gap-6 bg-white rounded-2xl">
                        <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <Phone className="text-blue-600" size={20} />
                            </div>
                            <span className="text-gray-800 font-medium">{lawyer.phone}</span>
                        </div>

                        <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                            <div className="bg-red-100 p-2 rounded-full shadow-sm">
                                <Mail className="text-red-600" size={20} />
                            </div>
                            <a
                                href={`mailto:${lawyer.email}`}
                                className="text-gray-900 font-medium hover:underline"
                            >
                                {lawyer.email}
                            </a>
                        </div>

                        <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="text-green-600 w-6 h-6"
                                >
                                    <path d="M16.002 2.002A13.97 13.97 0 0 0 2 16c0 2.47.665 4.797 1.937 6.864L2 30l7.31-1.911A13.966 13.966 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2.002 16.002 2.002zm0 25.996c-2.117 0-4.183-.55-6.002-1.588l-.429-.25-4.339 1.136 1.15-4.225-.281-.436A11.982 11.982 0 1 1 28 16c0 6.627-5.373 12-12 12zm6.417-8.834c-.337-.168-1.987-.98-2.295-1.093-.308-.112-.532-.168-.755.168-.224.337-.867 1.093-1.062 1.318-.195.224-.393.253-.73.084-.336-.168-1.42-.525-2.704-1.675-1-0.894-1.678-2-1.875-2.336-.196-.337-.021-.518.147-.687.15-.15.337-.393.505-.589.168-.196.224-.337.337-.56.112-.224.056-.42-.028-.589-.084-.168-.755-1.82-1.035-2.49-.27-.648-.547-.56-.755-.56h-.647c-.21 0-.56.084-.854.393s-1.12 1.094-1.12 2.665 1.147 3.094 1.306 3.31c.168.224 2.258 3.448 5.48 4.833.767.332 1.364.53 1.83.678.767.243 1.464.209 2.016.127.615-.092 1.987-.812 2.27-1.598.28-.785.28-1.457.196-1.597-.084-.14-.308-.224-.644-.393z" />
                                </svg>
                            </div>
                            <a
                                href={`https://wa.me/${lawyer.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 font-medium "
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>


                    <hr className="my-6" />

                    {/* Info */}

                    <div className="flex flex-row gap-6 justify-evenly">
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <MapPin size={18} className="text-blue-500" />
                            <span>{lawyer.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <Briefcase size={18} className="text-blue-500" />
                            <span>{lawyer.experience} years experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                            <Languages size={18} className="text-blue-500" />
                            <span>{lawyer.languages.join(', ')}</span>
                        </div>
                    </div>



                    <hr className="my-6" />

                    {/* Practice Areas */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                            <Briefcase size={20} className="text-blue-500" />
                            Practice Areas
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {lawyer.practiceAreas.map((area, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-inner border border-gray-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                            <Info size={20} className="text-blue-500" />
                            About the Lawyer
                        </h3>
                        <div className="space-y-3 text-gray-800 leading-relaxed">
                            {lawyer.description.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-16 max-w-5xl mx-auto px-4">
                    {/* Header with accent underline */}
                    <h1 className="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-blue-400 inline-block pb-1">
                        Popular Reviews
                    </h1>

                    {/* Reviews with subtle animation and spacing */}
                    <div className="flex flex-col gap-6">
                        {lawyer.reviews.map((r, index) => (
                            <ReviewCard key={index} review={r} />
                        ))}

                        {/* Review Form with subtle divider */}
                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <ReviewForm />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LawyerProfile;
