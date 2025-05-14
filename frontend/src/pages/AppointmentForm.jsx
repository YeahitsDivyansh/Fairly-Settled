import React from "react";

const AppointmentForm = () => {
  return (
    <div className="bg-white mt-12 min-h-screen py-10 relative">
      {/* Abstract Background Blobs */}
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

      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden ring-1 ring-gray-200">
        <div className="text-3xl py-6 px-8 bg-gradient-to-r from-black to-cyan-500 text-white text-center font-extrabold tracking-wide shadow">
          Schedule an Appointment
        </div>

        <form className="py-10 px-8 md:px-12 space-y-8" method="POST">
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
                placeholder="John Doe"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                placeholder="john@example.com"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                placeholder="+91 9876543210"
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              placeholder="Additional notes..."
              className="w-full rounded-xl px-4 py-3 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
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
