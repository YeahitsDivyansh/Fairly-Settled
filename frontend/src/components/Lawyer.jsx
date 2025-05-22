import React, { useState } from "react";
import { Phone, Mail, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const Lawyer = ({ lawyer }) => {
  const [showContact, setShowContact] = useState(false);

  const {
    id,
    fullName,
    profilePhoto,
    barCouncilEnrolment,
    barCouncilName,
    enrolmentDate,
    primaryCourts,
    yearsOfPractice,
    practiceAreas,
    languagesSpoken,
    education,
    email,
    servicesInPerson,
    servicesPhone,
    servicesVideo,
    city,
    state,
    workDescription,
  } = lawyer;

  return (
    <div className="w-[320px] h-[500px] bg-white shadow-lg rounded-md p-4 flex flex-col justify-between overflow-hidden">
      {/* Top Scrollable Content */}
      <div className="overflow-y-auto mb-4 pr-1">
        {/* Profile Picture and Name */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profilePhoto}
            alt={fullName}
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{fullName}</h2>
            <p className="text-sm text-gray-500">
              {barCouncilName} ({barCouncilEnrolment})
            </p>
            <p className="text-sm text-gray-500">Enrolled: {enrolmentDate}</p>
          </div>
        </div>

        {/* Details */}
        <p className="text-gray-700 text-sm mb-1">
          <strong>Primary Courts:</strong> {primaryCourts}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Years of Practice:</strong> {yearsOfPractice}
        </p>

        {/* Practice Areas */}
        <div className="mb-1">
          <strong className="text-gray-700 text-sm">Practice Areas:</strong>
          <ul className="list-disc list-inside text-gray-700 text-sm max-h-[60px] overflow-y-auto">
            {practiceAreas &&
              Object.entries(practiceAreas)
                .filter(([, value]) => value)
                .map(([area]) => <li key={area}>{area}</li>)}
          </ul>
        </div>

        <p className="text-gray-700 text-sm mb-1">
          <strong>Languages:</strong> {languagesSpoken}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Education:</strong> {education}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Location:</strong> {city}, {state}
        </p>

        {/* Bio */}
        <p className="text-gray-700 text-sm mb-1 line-clamp-3">
          <strong>Bio:</strong> {workDescription}
        </p>

        {/* Services */}
        <div className="text-gray-700 text-sm mt-2">
          <strong>Available for:</strong>
          <ul className="list-disc list-inside">
            {servicesInPerson && <li>In-person meetings</li>}
            {servicesPhone && <li>Phone consultations</li>}
            {servicesVideo && <li>Video consultations</li>}
          </ul>
        </div>
      </div>

      {/* Action Buttons + Contact */}
      <div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setShowContact(!showContact)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700 transition"
          >
            <MessageSquareText size={16} />
            {showContact ? "Hide Contact" : "Show Contact"}
          </button>

          <Link
            to={`/lawyerprofile/${id}`}
            className="text-center border border-gray-400 text-sm px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            View Profile
          </Link>
        </div>

        {/* Contact Info */}
        {showContact && (
          <div className="mt-3 bg-gray-50 p-2 rounded border text-gray-700 text-sm">
            <p className="flex items-center gap-2 mt-1">
              <Mail size={14} /> {email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lawyer;
