import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";
import { motion } from "framer-motion";
import { Search, MessageSquare, FileText } from "lucide-react";
import { useUserAuth } from "@/context/UserAuthContext";
import "./Mid_Section.css";
import CarouselBackground from "./carousel/carousel";
import { BackgroundBeams } from "@/animations/BackgroundBeams";
import { BentoGridDemo } from "../BentoGridDemo";
import { SVGMaskEffectDemo } from "../mask-demo";

const features = [
  {
    title: "Legal Chatbot",
    brief: "Instant answers to legal questions with our smart, user-friendly chatbot — no legal knowledge needed.",
    detail: "Agility AI offers a conversational legal assistant that helps users ask any legal question in plain English. Whether you're confused about a document or need step-by-step legal help, our chatbot gives instant, accurate, and easy-to-understand guidance — anytime, anywhere.",
  },
  {
    title: "Smart Drafting",
    brief: "Generate personalized legal documents from smart templates — ready in seconds.",
    detail: "From rent agreements to business contracts, our AI drafts legally sound documents based on your inputs. You just fill out a simple form and we generate a clean, downloadable file instantly — saving you hours and lawyer fees.",
  },
  {
    title: "Doc Summarizer",
    brief: "Upload legal files and get simplified summaries — understand what really matters.",
    detail: "Our AI reads through lengthy legal documents and highlights key points, clauses, and obligations in plain language. This helps users make informed decisions without needing to hire a lawyer for basic understanding.",
  },
  {
    title: "Case Tracker",
    brief: "Know where your case stands — from filing to final resolution.",
    detail: "We provide a clear timeline and live updates about your legal matters so you never stay in the dark. Whether you're filing a case or resolving a dispute, our tracker shows every milestone, saving both time and anxiety.",
  },
  {
    title: "Pay on Results",
    brief: "We follow a pay-for-performance model — justice first, payment later.",
    detail: "Unlike traditional legal services that charge heavy upfront fees, Agility AI takes only a small percentage based on the outcome. This makes legal help more affordable, especially for people who can't afford high legal retainers.",
  },
  {
    title: "Faster Justice",
    brief: "Automation cuts delays — lawyers focus on strategy, not paperwork.",
    detail: "By automating tasks like case filing, document drafting, and progress tracking, we reduce manual errors and save precious hours. Lawyers can concentrate on winning cases while clients get quicker resolutions at lower costs.",
  },
  {
    title: "Ironclad Security",
    brief: "Your legal data is fully protected with encrypted storage and role-based access.",
    detail: "We use top-tier security protocols including end-to-end encryption, two-factor authentication, and strict data compliance to ensure confidentiality. Whether you're an individual or a law firm, your trust and privacy are our top priority.",
  },
  {
    title: "Access for All",
    brief: "Democratizing law with tools anyone can use — no legal background needed.",
    detail: "Agility AI bridges the gap between people and the legal system. With intuitive design, language support, and guided workflows, even first-time users can confidently handle legal procedures without needing to rely on expensive counsel.",
  },
];

const MidSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { user, loading } = useUserAuth();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <div className=" bg-white pt-0 overflow-hidden">
      <div className="w-screen h-screen relative mb-16">
        <CarouselBackground />
      </div>

      <div className="md:px-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative py-20 mb-20 text-center bg-black backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl px-6 md:px-20 mx-auto overflow-hidden"
        >
          <BackgroundBeams />
          <motion.div
            className="relative z-10 rounded-xl py-12 px-4 sm:px-6 lg:px-8"
            style={{ willChange: "transform" }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight drop-shadow-sm">
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
                  className="w-full text-gray-800 text-center placeholder-white px-5 py-3 bg-white/30 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 backdrop-blur-sm focus:outline-none"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-full hover:bg-blue-700 transition"
                onClick={() => navigate("chat")}
              >
                <MessageSquare size={20} />
                {t.talk}
              </button>
              <button
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition"
                onClick={() => navigate("/draft-doc")}
              >
                <FileText size={20} className="group-hover:text-white" />
                {t.draft}
              </button>
              <button
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#42536a] hover:text-white transition"
                onClick={() => {
                  if (loading) return alert("Checking authentication status");
                  user ? navigate("/upload-doc") : (alert("Please login first to generate a draft."), navigate("/phonesignin"));
                }}
              >
                <FileText size={20} className="group-hover:text-white" />
                {t.upload}
              </button>
            </div>
          </motion.div>
        </motion.section>

        <motion.section className="py-16 bg-black px-4 rounded-xl mt-10 mb-10 overflow-hidden">
          <h2 className="text-5xl font-extrabold text-center mb-10 text-white">
            Your legal ally, powered by AI
          </h2>
          <motion.div className="w-full overflow-x-visible px-6 relative">
            <motion.div
              className={`marquee gap-6 ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ paddingBottom: "2rem" }}
            >
              {[...features, ...features].map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    className="mt-6 relative w-[300px] shrink-0 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-inner mx-2 transition-all duration-300 hover:z-50"
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    whileHover={{ scale: 1.05 }}
                    style={{ willChange: "transform" }}
                  >
                    <div className="absolute -inset-[1px] z-0 rounded-3xl bg-white opacity-30 animate-pulse"></div>
                    <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                      <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-white text-sm mb-2">{item.brief}</p>
                      {isExpanded && <p className="text-white text-sm">{item.detail}</p>}
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

        <section
          ref={sectionRef}
          className={`text-white py-16 px-6 mt-12 flex flex-col lg:flex-row items-start justify-between gap-y-8 lg:gap-x-8 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="lg:w-[48%] text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              You don't have to <span className="text-blue-600 font-extrabold">fight alone.</span>
            </h2>

            <p className="text-gray-600 text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed mb-4">
              At <span className="font-semibold text-black">Fairly Settled</span>, we believe no one should navigate legal battles alone — we're here to guide, support, and empower you every step of the way.
            </p>
            <p className="text-gray-600 text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-3">
              Whether it's a family dispute, property conflict, or corporate matter, our experienced legal team ensures you understand your rights and options clearly and confidently.
            </p>
            <p className="text-gray-600 text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              With compassion and commitment, we stand by your side to make legal support accessible, approachable, and truly impactful.
            </p>
          </div>

          <div className="lg:w-[48%] w-full flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1634424332103-6193490bfcc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Consultation"
              className="rounded-3xl w-full max-w-md h-auto object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
            />
          </div>
        </section>



        <div className="mt-20">
          <BentoGridDemo />
        </div>


        <div className="mt-20">
          <SVGMaskEffectDemo />
        </div>

        <div className="group flex flex-col lg:flex-row items-start gap-10 py-16 mb-20 bg-white">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Supporting community"
              className="w-full max-w-full max-h-[400px] object-cover rounded-lg opacity-90 transition-transform duration-500 hover:scale-105 mt-2"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col text-left">
            <h2 className="text-5xl font-extrabold uppercase mb-8 border-l-4 border-yellow-500 pl-4">
              A Commitment to
              <br /> Accessible Justice
            </h2>
            <h3 className="text-2xl font-bold mb-6">
              Empowering Communities with AI-Driven Legal Solutions.
            </h3>
            <p className="text-black mb-5 leading-relaxed">
              At Fairly Settled, we believe justice should be swift, smart, and accessible. Through our cutting-edge platform powered by Agility AI, we bridge the gap between individuals and legal support — eliminating complexity and reducing barriers to fair outcomes.
            </p>
            <p className="text-black leading-relaxed">
              Our commitment extends beyond technology — it’s about people. We actively support initiatives that democratize legal knowledge, empower underserved communities, and ensure that no one is left behind in the pursuit of justice.
            </p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MidSection;
