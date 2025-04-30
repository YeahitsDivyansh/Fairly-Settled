import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {ThumbsUp, MapPin, Briefcase, Phone, Mail, MessageSquareText, X} from 'lucide-react';

const Lawyer = ({ lawyer }) => {
  const [showContact, setShowContact] = useState(false);
  const contactBtnRef = useRef(null);

  const {
    name,
    image,
    location,
    experience,
    rating,
    reviews,
    phone = '+91 98765 43210',
    email = 'lawyer@example.com'
  } = lawyer;

  return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto border border-gray-200">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <img
            src={image}
            alt={name}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow"
          />
          <div className="flex flex-col gap-2">
            <Link to="/lawyerprofile">
              <h2 className="text-blue-700 text-2xl font-bold hover:underline">{name}</h2>
            </Link>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin size={16} className="text-blue-500" />
              {location}
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Briefcase size={16} className="text-blue-500" />
              {experience} years experience
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                <ThumbsUp size={14} />
                <span>{rating}</span>
              </div>
              <Link to="#" className="text-blue-500 text-sm">
                {reviews} Reviews
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 mt-6 md:mt-0 items-center md:items-end relative">
          <Link
            to="/appointment"
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center text-xs font-medium rounded-full shadow transition transform hover:-translate-y-1"
          >
            Schedule<br /> Appointment
          </Link>

          {/* Contact Button */}
          <button
            ref={contactBtnRef}
            onClick={() => setShowContact(!showContact)}
            className="px-4 py-2 border border-blue-400 text-blue-500 hover:bg-blue-50 text-xs font-medium rounded-full shadow transition transform hover:-translate-y-1"
          >
            Contact Details
          </button>

          {/* Contact Popup */}
          {showContact && (
            <div className="absolute top-full mt-2 right-0 w-64 z-10 bg-white rounded-xl shadow-xl border border-blue-100 p-4 backdrop-blur-md">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-semibold text-gray-700">Contact {name}</h4>
                <X className="h-4 w-4 text-gray-400 cursor-pointer" onClick={() => setShowContact(false)} />
              </div>
              <div className="flex flex-col gap-3">
                <Link to="#" className="flex items-center gap-3 hover:bg-blue-50 p-2 rounded-md transition">
                  <Phone size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-700">{phone}</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 hover:bg-blue-50 p-2 rounded-md transition">
                  <Mail size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-700">{email}</span>
                </Link>
                <Link to="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-green-50 p-2 rounded-md transition">
                  <MessageSquareText size={18} className="text-green-600" />
                  <span className="text-sm text-gray-700">WhatsApp</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
   
  );
};

export default Lawyer;
