import React, { useState } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useParams } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast"; // <-- import toast

const AppointmentForm = ({ lawyerName }) => {
  const { user } = useUserAuth();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        lawyerId: id,
        lawyerName: lawyerName || "Unknown Lawyer",
        userId: user?.uid,
        userEmail: user?.email,
        createdAt: Timestamp.now(),
      });
      toast.success("Appointment booked successfully!"); // <-- use toast here
      // Optionally reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Something went wrong. Please try again."); // <-- use toast here
    }
  };

  return (
    <div className="bg-white mt-12 min-h-screen py-10 relative">
      {/* Background SVG */}
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

      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden ring-1 ring-gray-200">
        <div className="text-3xl py-6 px-8 bg-gradient-to-r from-black to-cyan-500 text-white text-center font-extrabold tracking-wide shadow">
          Schedule an Appointment with {lawyerName || "Lawyer"}
        </div>

        <form className="py-10 px-8 md:px-12 space-y-8" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          {/* Phone & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          {/* Time & Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="service"
              >
                Service
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="">Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="documentation">Documentation</option>
                <option value="case-review">Case Review</option>
                <option value="legal-advice">Legal Advice</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional notes..."
              className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
