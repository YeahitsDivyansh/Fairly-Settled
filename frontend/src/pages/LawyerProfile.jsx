import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Languages,
  MapPin,
  ThumbsUp,
  Phone,
  Mail,
  Info,
} from "lucide-react"; // Added more icons
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";

const ContactItem = ({ icon, value, link, bg }) => (
  <div
    className={`flex items-center gap-3 hover:scale-105 transition-transform duration-200 ${bg} p-2 rounded-xl shadow-sm`}
  >
    <div>{icon}</div>
    {link ? (
      <a
        href={link}
        className="text-gray-800 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    ) : (
      <span className="text-gray-800 font-medium">{value}</span>
    )}
  </div>
);

const ProfileDetail = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);

const LawyerProfile = () => {
  const [lawyers, setLawyers] = useState([]);

  const fetchLawyers = async () => {
    const querySnapshot = await getDocs(collection(db, "lawyers"));
    const lawyers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return lawyers;
  };

  useEffect(() => {
    fetchLawyers().then(setLawyers);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const lawyer = lawyers.find((lawyer) => lawyer.id === id);

  if (!lawyer) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-white px-4 py-2 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 border border-gray-200">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <img
              src={lawyer.profilePhoto}
              alt={lawyer.fullName}
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 shadow-sm mr-4"
            />
            <div className="flex-1">
              <h2 className="text-blue-800 text-2xl font-bold">
                {lawyer.fullName}
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  <ThumbsUp size={14} />
                  <span>{lawyer.rating}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(`/appointment/${lawyer.id}`)}
              className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full shadow-sm transition transform hover:-translate-y-1 w-full md:w-auto text-center mr-5"
            >
              Schedule
              <br /> Appointment
            </button>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Contact Info */}
          <div className="flex flex-row justify-evenly gap-6 bg-white rounded-2xl">
            <ContactItem
              icon={<Phone className="text-blue-600" />}
              value={lawyer.phone}
              bg="bg-blue-50"
            />
            <ContactItem
              icon={<Mail className="text-red-600" />}
              value={lawyer.email}
              link={`mailto:${lawyer.email}`}
              bg="bg-red-50"
            />
            {lawyer.mobileNumber && (
              <ContactItem
                icon={
                  <svg
                    className="text-green-600 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.003 2.002c-7.732 0-14 6.268-14 14 0 2.472.665 4.797 1.938 6.864l-1.938 5.134 5.33-1.396A13.966 13.966 0 0 0 16 30.003c7.732 0 14-6.268 14-14s-6.268-14-13.997-14zM16 27.997c-2.118 0-4.183-.55-6.003-1.588l-.428-.25-4.34 1.136 1.15-4.225-.282-.436A11.982 11.982 0 1 1 28 16.002c0 6.627-5.373 11.995-12 11.995zm6.418-8.834c-.338-.168-1.987-.98-2.296-1.093-.308-.112-.532-.168-.755.168-.223.337-.866 1.093-1.061 1.318-.196.224-.393.253-.73.084-.337-.168-1.421-.525-2.705-1.675-1-.894-1.678-2-1.875-2.336-.196-.337-.021-.518.147-.687.15-.15.337-.393.505-.589.168-.196.224-.337.337-.56.112-.224.056-.42-.028-.589-.084-.168-.755-1.82-1.035-2.49-.27-.648-.547-.56-.755-.56h-.648c-.21 0-.56.084-.854.393s-1.12 1.094-1.12 2.665 1.148 3.094 1.306 3.31c.168.224 2.258 3.448 5.481 4.833.766.332 1.363.53 1.83.678.766.243 1.463.209 2.015.127.615-.092 1.987-.812 2.271-1.598.28-.785.28-1.457.196-1.597-.084-.14-.308-.224-.644-.393z" />
                  </svg>
                }
                value="WhatsApp"
                link={`https://wa.me/${lawyer.mobileNumber.replace(/\D/g, "")}`}
                bg="bg-green-50"
              />
            )}
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Location, Experience, Languages */}
          <div className="flex flex-row gap-6 justify-evenly text-gray-700 font-medium">
            <ProfileDetail
              icon={<MapPin size={18} className="text-blue-500" />}
              label={`${lawyer.city}, ${lawyer.state}`}
            />
            <ProfileDetail
              icon={<Briefcase size={18} className="text-blue-500" />}
              label={`${lawyer.yearsOfPractice} years experience`}
            />
            <ProfileDetail
              icon={<Languages size={18} className="text-blue-500" />}
              label={
                Array.isArray(lawyer.languagesSpoken)
                  ? lawyer.languagesSpoken.join(", ")
                  : lawyer.languagesSpoken || "Not specified"
              }
            />
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Practice Areas */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-500" />
              Practice Areas
            </h3>
            {lawyer.practiceAreas &&
            Object.entries(lawyer.practiceAreas).some(([, v]) => v) ? (
              <div className="flex flex-wrap gap-3">
                {Object.entries(lawyer.practiceAreas)
                  .filter(([, value]) => value)
                  .map(([area], index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition"
                    >
                      {area}
                    </span>
                  ))}
              </div>
            ) : (
              <p className="text-gray-500">No practice areas listed.</p>
            )}
          </div>

          {/* About */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-inner border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <Info size={20} className="text-blue-500" />
              About the Lawyer
            </h3>
            <div className="space-y-3 text-gray-800 leading-relaxed">
              {Array.isArray(lawyer.workDescription) &&
              lawyer.workDescription.length > 0 ? (
                lawyer.workDescription.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              ) : typeof lawyer.workDescription === "string" &&
                lawyer.workDescription.trim() !== "" ? (
                <p>{lawyer.workDescription}</p>
              ) : (
                <p className="text-gray-500">No description available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Reviews */}
        {/* <div className="my-16 max-w-5xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-blue-400 inline-block pb-1">
                        Popular Reviews
                    </h1>
                    <div className="flex flex-col gap-6">
                        {lawyer.reviews.map((r, index) => (
                            <ReviewCard key={index} review={r} />
                        ))}
                        <div className="mt-8 pt-6 border-t border-gray-400">
                            <ReviewForm />
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default LawyerProfile;
