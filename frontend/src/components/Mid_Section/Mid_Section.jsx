import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";
import { motion } from "framer-motion";
import { Search, MessageSquare, FileText, Upload, Star } from "lucide-react";

const MidSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="px-4 bg-[#F6F1DE] pt-15 md:px-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fade}
        className="py-20 text-center bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: "url('./mid-img2.webp')" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-6 leading-tight"
          variants={fadeUp}
        >
          Your Legal Questions,
          <br />
          Answered Instantly
        </motion.h1>
        <motion.p
          className="text-white text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          {t.benefits}
        </motion.p>

        <motion.div
          className="max-w-xl mx-auto mb-8 px-4"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
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
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-200"
          >
            <MessageSquare size={20} />
            {t.talk}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition duration-200"
            onClick={() => navigate("/draft-doc")}
          >
            <FileText
              size={20}
              className="text-gray-700 group-hover:text-white"
            />
            {t.draft}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/upload-doc")}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition duration-200"
          >
            <Upload
              size={20}
              className="text-gray-700 group-hover:text-white"
            />
            {t.upload}
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 text-center bg-gray-50 px-4 mt-8 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.journey}</h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {t.journeyDesc}
        </p>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-center mb-4"
          variants={fadeUp}
        >
          {t.testimonials}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-10"
          variants={fadeUp}
        >
          {t.testimonialsDesc}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(3)].map((_, index) => {
            const testimonials = [
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
            ];

            const testimonial = testimonials[index];

            return (
              <motion.div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                variants={fadeUp}
                transition={{ delay: 0.1 * index }}
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
                    <div className="font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default MidSection;
