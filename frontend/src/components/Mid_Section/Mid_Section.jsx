import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";
import { motion } from "framer-motion";
import { Search, MessageSquare, FileText, Upload, Star } from "lucide-react";
import { useUserAuth } from "@/context/UserAuthContext";
import "./Mid_Section.css";

const features = [
  {
    title: "A Cost-Effective, Results-Driven Model",
    brief:
      "Unlike traditional legal solutions, Agility AI works on a percentage-based model, meaning we only take a small share of the legal costs.",
    detail:
      "This ensures that you only pay for the results we help deliver, making our services affordable for individuals and law firms alike. We are the first in the country to offer this type of pay-for-performance model, which sets us apart and ensures that justice remains within reach for all.",
  },
  {
    title: "Revolutionizing Legal Services with Innovation",
    brief:
      "At Agility AI, we’re committed to making justice faster, smarter, and more affordable for everyone. ",
    detail:
      "By integrating cutting-edge AI technology into every step of the legal process — from case filing to document generation and real-time case tracking — we eliminate the inefficiencies that have long plagued the legal system.",
  },
  {
    title: "Faster Justice, Lower Costs",
    brief:
      "Our AI-powered platform cuts down on the time it takes to file cases, generate documents, and track progress.",
    detail:
      "By automating routine tasks, we allow legal professionals to focus on what truly matters — strategy, client interaction, and case resolution.",
  },
  {
    title: "Secure, Scalable & Built for Trust",
    brief:
      "In the legal world, data is everything and at Agility AI, we treat it with the utmost care.",
    detail:
      " Our platform is built on secure, scalable infrastructure that ensures confidentiality, compliance, and peace of mind. With end-to-end encryption, role-based access, and rigorous data protocols, we safeguard every document, every case, and every user interaction. Whether you're a law firm handling sensitive matters or an individual seeking support, you can trust Agility AI to protect your legal journey..",
  },
  {
    title: "Bridging the Gap Between People and the Law",
    brief:
      "Agility AI isn’t just a tool — it’s a bridge. We empower individuals who may not have legal knowledge or access to expensive counsel by guiding them through legal procedures with user-friendly AI tools and smart chatbots.",
    detail:
      "Whether you're a first-time filer or a seasoned professional, our platform ensures clarity, support, and direction at every step. We simplify the complex, demystify the legal maze, and put justice within everyone’s reach one click at a time.",
  },
];

const MidSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { user,loading } = useUserAuth();

  return (
    <div className="px-4 bg-[#9db6d9bd] pt-15 md:px-20 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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

        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-200"
            onClick={() => navigate("chat")}
          >
            <MessageSquare size={20} />
            {t.talk}
          </button>

          <button
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition duration-200"
            onClick={() => {
              if (loading){
                alert("Checking authentication status");
                return;
              }
              if (user) {
                navigate("/draft-doc");
              } else {
                alert("Please login first to generate a draft.");
                navigate("/phonesignin");
              }
            }}
          >
            <FileText size={20} className="group-hover:text-white" />
            {t.draft}
          </button>

          <button
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition duration-200"
            onClick={() => {
              if (loading){
                alert("Checking authentication status");
                return;
              }
              if (user) {
                navigate("/upload-doc");
              } else {
                alert("Please login first to generate a draft.");
                navigate("/phonesignin");
              }
            }}
          >
            <FileText size={20} className="group-hover:text-white" />
            {t.upload}
          </button>

          
        </div>
      </motion.section>

      <motion.section className="py-16 bg-[#9db6d9bd] px-4 rounded-xl mt-10 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Your legal ally, powered by AI
        </h2>

        {/* Motion div for infinite scrolling */}
        <motion.div className="overflow-hidden  w-full">
          <motion.div
            className={`flex  marquee ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...features, ...features].map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={idx}
                  className="relative w-[300px] shrink-0 rounded-3xl overflow-hidden bg-white/30 backdrop-blur-xl border border-white/40 shadow-inner transition-all duration-300 cursor-pointer mx-2 perspective-[1000px]"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  whileHover={{ scale: 1.05 }}
                  style={{ willChange: "transform" }}
                >
                  {/* Glowing gradient border */}
                  <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white/60 via-black/30 to-gray-400 opacity-30 blur-xl animate-pulse"></div>

                  {/* Card content */}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">{item.brief}</p>
                    {isExpanded && (
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    )}

                    <div className="mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(isExpanded ? null : idx);
                        }}
                        className="bg-[#3E3F5B] w-[100px] text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-500 transition mt-3 hover:scale-110"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section className="py-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          {t.testimonials}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          {t.testimonialsDesc}
        </p>

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
            <motion.div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
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
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MidSection;
