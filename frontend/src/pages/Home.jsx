// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  Search,
  MessageSquare,
  FileText,
  Upload,
  Star,
  Globe2,
  ChevronDown,
} from "lucide-react";
import AuroraBackground from "@/components/ui/aurora-background";


const App = () => {
  const [language, setLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const translations = {
    en: {
      search: "Search your legal questions...",
      talk: "Talk to AI Lawyer",
      draft: "Draft Legal Notice",
      upload: "Upload Document",
      benefits:
        "Experience the future of legal assistance with our AI-powered platform. Get expert advice, draft documents, and manage your legal needs effortlessly.",
      journey: "Your Legal Journey Made Effortless",
      journeyDesc:
        "Our platform simplifies legal processes with user-friendly tools and AI assistance. Enjoy seamless multilingual support, making legal help accessible to everyone.",
      testimonials: "Client Testimonials",
      testimonialsDesc: "Our clients love the support and efficiency.",
    },
    hi: {
      search: "अपने कानूनी प्रश्न खोजें...",
      talk: "AI वकील से बात करें",
      draft: "कानूनी नोटिस ड्राफ्ट करें",
      upload: "दस्तावेज़ अपलोड करें",
      benefits:
        "हमारे AI-संचालित प्लेटफॉर्म के साथ कानूनी सहायता का भविष्य अनुभव करें। विशेषज्ञ सलाह प्राप्त करें, दस्तावेज़ तैयार करें और अपनी कानूनी जरूरतों को आसानी से प्रबंधित करें।",
      journey: "आपकी कानूनी यात्रा हुई आसान",
      journeyDesc:
        "हमारा प्लेटफॉर्म उपयोगकर्ता-अनुकूल टूल्स और AI सहायता के साथ कानूनी प्रक्रियाओं को सरल बनाता है। बहुभाषी सहायता का आनंद लें, जो कानूनी मदद को सभी के लिए सुलभ बनाता है।",
      testimonials: "ग्राहक प्रशंसापत्र",
      testimonialsDesc: "हमारे ग्राहक सहायता और दक्षता को पसंद करते हैं।",
    },
  };

  const t = translations[language];
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="w-full shadow-[0_2px_4px_-1px_rgba(0,0,0,1)] bg-white sticky top-0 z-50 ">
  <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
    {/* Logo */}
    <div className="text-lg font-semibold tracking-wide flex items-center gap-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/9504/9504143.png"
        alt="NyayaSahayak Logo"
        className="w-6 h-6"
      />
      NyayaSahayak
    </div>

    {/* Search Bar */}
    <div className="flex-1 max-w-lg order-3 sm:order-2 sm:ml-[3rem]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-2  rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
    </div>

    {/* Right-side buttons */}
    <div className="flex items-center gap-4 order-2 sm:order-3 ml-auto">
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700">
          Sign up
        </button>
        <button 
        
        className="text-black-800 bg-gray-500 text-sm px-4 py-1.5 rounded-full hover:bg-gray-300">
          Log in
        </button>
        {/* Language Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            type="button"
            className="inline-flex justify-center items-center gap-1 text-sm text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-full"
          >
            <Globe2 size={18} />
            <span>{language === "en" ? "English" : "हिंदी"}</span>
            <ChevronDown size={14} />
          </button>

          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("hi");
                    setIsDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  हिंदी
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <div 
      style={{padding:"0rem 5rem"}}
      >
        <div
        style={{padding:"5rem 5rem"}}
        >
          
      {/* <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > */}
        <section className="py-20 text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./img2.jpg')", borderRadius:"1rem" }}
        >
        
        <h1 className="text-4xl text-white sm:text-6xl font-bold mb-6">
          Your Legal Questions,
          <br />
          Answered Instantly
        </h1>
        <p className="text-white text-gray-600 mb-10 max-w-2xl mx-auto">{t.benefits}</p>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
            
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-white px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <MessageSquare size={20} />
            {t.talk}
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <FileText size={20} />
            {t.draft}
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <Upload size={20} />
            {t.upload}
          </button>
        </div>
      </section>
      {/* </motion.div>
    </AuroraBackground> */}
    </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">{t.journey}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.journeyDesc}</p>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">{t.testimonials}</h2>
        <p className="text-lg text-gray-600 text-center mb-10">{t.testimonialsDesc}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <div key={index} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer   className="bg-gray-300 py-12 px-4 text-sm text-gray-700">
        <div className="flex flex-wrap justify-center gap-6 mx-4 my-4 text-center">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">User Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10  pt-3 text-gray-500">
          &copy; 2024 FairlySettled. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
