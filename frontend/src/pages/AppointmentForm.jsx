import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import { useUserAuth } from "../context/UserAuthContext";
// import emailjs from '@emailjs/browser';
import { addDoc, collection, getDoc, doc, Timestamp } from "firebase/firestore";
import axios from "axios";


const AppointmentForm = () => {
  const { userData } = useUserAuth();
  const { id } = useParams();
  // State to hold lawyer info
  const [lawyerName, setLawyerName] = useState(null);
  const [lawyerEmail, setLawyerEmail] = useState(null);


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
  

  useEffect(() => {
    // Fetch lawyer info when component mounts or id changes
    const fetchLawyer = async () => {
      if (!id) return; // no id, do nothing
      try {
        const lawyerDoc = await getDoc(doc(db, "lawyers", id));
        if (lawyerDoc.exists()) {
          setLawyerName(lawyerDoc.data().fullName || "Unknown Lawyer");
          setLawyerEmail(lawyerDoc.data().email || null);
        } else {
          setLawyerName("Unknown Lawyer");
          setLawyerEmail(null);
        }
      } catch (error) {
        console.error("Error fetching lawyer:", error);
      }
    };

    fetchLawyer();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };


  const sendLawyerMail = async (formData) => {
  try {
    await axios.post("https://send-mails-sftt.onrender.com/send-appointment-mails", {
      lawyer_email: lawyerEmail,
      lawyer_name:lawyerName,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      date: formData.date,
      time: formData.time,
      service: formData.service,
      message: formData.message,
    });
    console.log("Mail sent successfully");
  } catch (error) {
    console.error("Error sending mail:", error);
  }
};

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

    // const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // const lawyerTemplateId = import.meta.env.VITE_EMAILJS_LAWYER_TEMPLATE_ID;
    // const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    // const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 1. Fetch lawyer data first
      const lawyerDoc = await getDoc(doc(db, "lawyers", id));
      if (!lawyerDoc.exists()) {
        throw new Error("Lawyer not found.");
      }

      const lawyerEmail = lawyerDoc.data().email;
      const fetchedLawyerName = lawyerDoc.data().fullName || "Unknown Lawyer";

      if (!lawyerEmail) {
        throw new Error("Lawyer email not found.");
      }

      await sendLawyerMail(formData);

      // Save appointment to Firestore
      await addDoc(collection(db, "appointments"), {
        ...formData,
        lawyerId: id,
        lawyerName: fetchedLawyerName,
        userId: userData?.id,
        createdAt: Timestamp.now(),
      });

      // 3. Send email to the lawyer
      
      // await emailjs.send(
      //   serviceId,
      //   lawyerTemplateId,
      //   {
      //     lawyer_email: lawyerEmail,
      //     customer_name: formData.name,
      //     customer_email: formData.email,
      //     customer_phone: formData.phone,
      //     date: formData.date,
      //     time: formData.time,
      //     service: formData.service,
      //     message: formData.message,
      //   },
      //   publicKey
      // );

      // 4. Send auto-reply email to the client
      // await emailjs.send(
      //   serviceId,
      //   autoReplyTemplateId,
      //   {
      //     customer_name: formData.name,
      //     customer_email: formData.email,
      //     lawyer_name: fetchedLawyerName,
      //     date: formData.date,
      //     time: formData.time,
      //     service: formData.service,
      //   },
      //   publicKey
      // );
       // 5. Notify user and reset form
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
