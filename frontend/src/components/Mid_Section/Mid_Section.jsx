
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";

import {
  Search,
  MessageSquare,
  FileText,
  Upload,
  Star,
} from "lucide-react";

const MidSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="px-4 bg-gray-300 pt-15 md:px-20">
      {/* Hero Section */}
      <section
        className="py-20 text-center bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: "url('./mid-img2.webp')" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
          Your Legal Questions,
          <br />
          Answered Instantly
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {t.benefits}
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-white px-5 py-3 border border-gray-300 rounded-full bg-black/20 backdrop-blur-sm placeholder-white focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-200">
            <MessageSquare size={20} />
            {t.talk}
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200"
            onClick={() => navigate("/draft-doc")}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#42536a"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#f3f4f6"}
          >
            <FileText size={20} />
            {t.draft}
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-#42536a hover:text-white cursor-pointer transition duration-200"
            onMouseEnter={(e) => e.target.style.backgroundColor = "#42536a"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#f3f4f6"}
            onClick={() => navigate("/upload-doc")}
          >
            <Upload size={20} />
            {t.upload}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-center bg-gray-50 px-4 mt-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.journey}</h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">{t.journeyDesc}</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">{t.testimonials}</h2>
        <p className="text-lg text-gray-600 text-center mb-10">{t.testimonialsDesc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Rajesh Kumar",
              role: "Business Owner",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
              quote: "The AI Lawyer made my legal process so much easier!",
            },
            {
              name: "Anjali Sharma",
              role: "Legal Consultant",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
              quote: "I was able to draft my notice in minutes!",
            },
            {
              name: "Vikram Singh",
              role: "Startup Founder",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
              quote: "The Document Analysis feature saved me hours of work!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-800 mb-4 text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MidSection;