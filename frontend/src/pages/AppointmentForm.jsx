import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import { useUserAuth } from "../context/UserAuthContext";

const AppointmentForm = ({ lawyerName }) => {
  const { userData } = useUserAuth();
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

  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ prevents double trigger

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  let hasShownLoginToast = false; // Place this outside the component

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // avoid multiple submits
    setIsSubmitting(true);

    if (!userData) {
      if (!hasShownLoginToast) {
        hasShownLoginToast = true;
        toast.error("Please register & log in to book an appointment.", {
          duration: 5000,
        });
      }
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        lawyerId: id,
        lawyerName: lawyerName || "Unknown Lawyer",
        userId: userData?.id,
        createdAt: Timestamp.now(),
      });

      toast.success("Appointment booked successfully!", {
        duration: 5000,
      });

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
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white mt-12 min-h-screen py-10 relative">
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
              disabled={isSubmitting}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
