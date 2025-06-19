import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  Stars,
  ArrowDown,
} from "lucide-react";

const faqData = [
  {
    question: "What is FairlySettled?",
    answer: `FairlySettled is an AI-powered legal tech platform built to streamline legal workflows for lawyers, firms, and clients alike. At its core, FairlySettled empowers users to analyze legal documents, generate high-quality legal drafts, and get instant support through an intelligent chatbot assistant — all in one seamless interface.

Whether you're reviewing contracts, drafting petitions, or preparing case summaries, FairlySettled accelerates your work using state-of-the-art natural language processing and domain-specific AI models. Our platform doesn’t just automate — it enhances legal precision, ensuring that your output is not just faster, but smarter.`,
  },
  {
    question: "How can FairlySettled enhance my legal practice?",
    answer: `FairlySettled boosts efficiency in legal workflows by eliminating repetitive manual work, enabling secure document handling, facilitating real-time collaboration, and simplifying client interactions — all within a unified, AI-driven platform.`,
  },
  {
    question: "What sets FairlySettled apart from other legal tech tools?",
    answer: `FairlySettled stands out with its seamless blend of user-centric design, AI-native features, and full-spectrum legal workflow automation — offering a smarter, faster, and more intuitive experience than traditional solutions.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 px-6 py-16 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mt-5">
        {/* Badge: icon spins, text stays */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg border border-slate-200 mb-6">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-6 h-6 flex items-center justify-center"
          >
            {/* Use Lucide icon */}
            <Stars className="text-blue-600" />

            {/* OR your PNG */}
            {/* <Image src="/rotating-icon.png" alt="icon" width={24} height={24} /> */}
          </motion.div>

          <span className="text-blue-600 font-semibold text-sm md:text-base">
            Got Questions? We've Got Expert Answers
          </span>
        </div>

        <motion.h1
          className="text-5xl font-bold text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </motion.h1>
      </div>
      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatePresence>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl mt-8 shadow-xl border border-slate-200 bg-white/80 backdrop-blur-md transition-all ${
                  isOpen ? "ring-2 ring-blue-500/20" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-slate-900 hover:bg-slate-100 rounded-3xl"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden px-6 pb-6 text-slate-700 text-lg"
                    >
                      <div className="pt-4 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Contact Section */}

      <div className="mt-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-blue-600 rounded-3xl shadow-xl p-6 space-y-6 text-white"
        >
          {/* Top CTA */}
          <div className="inline-flex items-center justify-center w-full gap-3 px-6 py-4 rounded-2xl font-bold text-lg shadow hover:shadow-2xl cursor-pointer bg-blue-700">
            <MessageCircle size={24} />
            Still have questions? Chat with us
            <ChevronDown size={20} />
          </div>

          {/* Email & Phone */}
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Mail size={18} className="text-white" />
              <span>Email:</span>
              <a
                href="mailto:service@agilityai.in"
                className="underline text-white"
              >
                service@agilityai.in
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={18} className="text-white" />
              <span>Phone:</span>
              <a href="tel:+917042149608" className="underline text-white">
                +91 70421 49608
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
