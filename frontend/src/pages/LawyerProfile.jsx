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
    <div className="relative min-h-screen bg-gray-50 pt-32 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={lawyer.profilePhoto}
            alt={lawyer.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow"
          />
          <div className="flex-1">
            <h2 className="text-black text-2xl font-semibold">
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
            className="px-4 py-2 bg-black hover:bg-gray-700 text-white text-sm font-medium rounded-full shadow transition hover:-translate-y-1"
          >
            Schedule
            <br />
            Appointment
          </button>
        </div>

        <hr className="my-5" />

        {/* Contact Info */}
        <div className="w-full mb-6 flex">
          <div className="max-w-xl w-full">
            <ContactItem
              icon={<Mail className="text-red-600" />}
              value={
                <div>
                  <span className="block w-full break-all">
                    chhavichoudhary187@gmail.com
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    Feel free to reach out for consultations or queries —
                    usually responds within 24 hours.
                  </p>
                </div>
              }
              link="mailto:chhavichoudhary187@gmail.com"
              bg="bg-red-50"
            />
          </div>
        </div>

        {/* Basic Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 font-medium mb-6">
          <ProfileDetail
            icon={<MapPin size={18} className="text-black" />}
            label={`${lawyer.city}, ${lawyer.state}`}
          />
          <ProfileDetail
            icon={<Briefcase size={18} className="text-black" />}
            label={`${lawyer.yearsOfPractice} yrs experience`}
          />
          <ProfileDetail
            icon={<Languages size={18} className="text-black" />}
            label={
              Array.isArray(lawyer.languagesSpoken)
                ? lawyer.languagesSpoken.join(", ")
                : lawyer.languagesSpoken || "Not specified"
            }
          />
        </div>

        {/* Practice Areas */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
            <Briefcase size={20} className="text-black" />
            Practice Areas
          </h3>
          {lawyer.practiceAreas &&
          Object.entries(lawyer.practiceAreas).some(([, v]) => v) ? (
            <div className="flex flex-wrap gap-2">
              {Object.entries(lawyer.practiceAreas)
                .filter(([, value]) => value)
                .map(([area], index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-black px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {area}
                  </span>
                ))}
            </div>
          ) : (
            <p className="text-gray-500">No practice areas listed.</p>
          )}
        </div>

        {/* About Section */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner border border-gray-200">
          <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
            <Info size={20} className="text-blue-500" />
            About the Lawyer
          </h3>
          <div className="space-y-3 text-gray-800 leading-relaxed text-sm">
            {Array.isArray(lawyer.workDescription) &&
            lawyer.workDescription.length > 0 ? (
              lawyer.workDescription.map((para, idx) => <p key={idx}>{para}</p>)
            ) : typeof lawyer.workDescription === "string" &&
              lawyer.workDescription.trim() !== "" ? (
              <p>{lawyer.workDescription}</p>
            ) : (
              <p className="text-gray-500">No description available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
