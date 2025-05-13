import React, { useState } from "react";
import { Phone, Mail, X, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const Lawyer = ({ lawyer }) => {
  const [showContact, setShowContact] = useState(false);

  const {
    id,
    fullName,
    image,
    barCouncilEnrolment,
    barCouncilName,
    enrolmentDate,
    primaryCourts,
    yearsOfPractice,
    practiceAreas,
    languagesSpoken,
    education,
    mobileNumber,
    email,
    servicesInPerson,
    servicesPhone,
    servicesVideo,
    city,
    state,
    workDescription,
  } = lawyer;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-md mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <img
          src={image}
          alt={fullName}
          className="w-32 h-32 rounded-full object-cover border"
        />

        <div className="flex-1">
          {/* Name and Enrollment */}
          <h2 className="text-2xl font-semibold text-gray-800">{fullName}</h2>
          <p className="text-sm text-gray-500">
            Bar Council: {barCouncilName} ({barCouncilEnrolment})<br />
            Enrolled on: {enrolmentDate}
          </p>

          {/* Courts & Experience */}
          <p className="mt-2 text-gray-700">
            <strong>Primary Courts:</strong> {primaryCourts}
          </p>
          <p className="text-gray-700">
            <strong>Years of Practice:</strong> {yearsOfPractice}
          </p>

          {/* Practice Areas */}
          <div className="mt-2">
            <strong className="text-gray-700">Practice Areas:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {practiceAreas &&
                Object.entries(practiceAreas)
                  .filter(([, value]) => value)
                  .map(([area]) => <li key={area}>{area}</li>)}
            </ul>
          </div>

          {/* Languages */}
          <p className="mt-2 text-gray-700">
            <strong>Languages:</strong> {languagesSpoken}
          </p>

          {/* Education */}
          <p className="text-gray-700">
            <strong>Education:</strong> {education}
          </p>

          {/* Location */}
          <p className="text-gray-700">
            <strong>Location:</strong> {city}, {state}
          </p>

          {/* Bio / Work Description */}
          <p className="mt-4 text-gray-700">
            <strong>Bio:</strong> {workDescription}
          </p>

          {/* Communication Modes */}
          <div className="mt-4 text-gray-700">
            <strong>Available for:</strong>
            <ul className="list-disc list-inside">
              {servicesInPerson && <li>In-person meetings</li>}
              {servicesPhone && <li>Phone consultations</li>}
              {servicesVideo && <li>Video consultations</li>}
            </ul>
          </div>

          {/* Contact Buttons */}
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={() => setShowContact(!showContact)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <MessageSquareText size={16} />
              {showContact ? "Hide Contact" : "Show Contact"}
            </button>

            <Link
              to={`/lawyerprofile/${id}`}
              className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              View Profile
            </Link>
          </div>

          {/* Contact Info */}
          {showContact && (
            <div className="mt-4 bg-gray-50 p-4 rounded border text-gray-700">
              <p className="flex items-center gap-2">
                <Phone size={16} /> {mobileNumber}
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Mail size={16} /> {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
