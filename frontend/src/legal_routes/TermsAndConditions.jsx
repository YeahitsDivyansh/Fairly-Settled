import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  User,
  FileText,
  Users,
  AlertTriangle,
  Scale,
  Clock,
  CheckCircle2,
  ChevronRight,
  Copyright,
  Settings,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionIcons = {
  About: Users,
  Eligibility: User,
  Responsibilities: Shield,
  Intellectual: Copyright,
  Legal: FileText,
  Data: Settings,
  Fees: Scale,
  Availability: Scale,
  Termination: AlertTriangle,
  Disclaimer: FileText,
  Limitation: Scale,
  Governing: FileText,
  Changes: Settings,
  Contact: FileText,
};

const termsSections = [
  {
    id: "about",
    title: "About Agility AI",
    subtitle: "What we do",
    content: [
      "Agility AI is India’s first AI-driven, pay-for-performance legal tech platform built with a human-first approach. Our mission is to reimagine justice delivery by making legal access more intelligent, intuitive, and inclusive.",
      "We serve both legal professionals and individuals through AI-powered tools that simplify litigation, document generation, rights awareness, and legal workflows.",
      "We do not replace lawyers — we empower them. We do not remove human judgment — we enhance it with data, design, and innovation.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    subtitle: "Who can use Agility AI",
    content: [
      "You must be at least 18 years old or have legal capacity in your jurisdiction to use this Platform. By accessing the Platform, you represent that you meet these requirements and are legally competent to enter into a binding contract.",
    ],
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    subtitle: "What you must do",
    content: [
      "You agree to use the Platform only for lawful purposes. You must not:",
      "• Use the Platform for fraudulent, illegal, or abusive purposes.",
      "• Interfere with the functioning of the Platform or compromise its security.",
      "• Misrepresent your identity or affiliation.",
      "• Upload or distribute viruses, malware, or harmful content.",
      "• Modify, adapt, reverse-engineer, or create derivative works of any part of the Platform.",
      "You are solely responsible for all activity that occurs under your account and for any use of our services via your access credentials.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    subtitle: "Ownership and usage",
    content: [
      "All intellectual property rights in our Platform, including software, algorithms, designs, graphics, legal templates, user interfaces, and documentation, are owned or licensed by Agility AI. All rights are reserved.",
      "You are granted a limited, non-exclusive, non-transferable license to use the Platform for personal or internal business purposes only. Any unauthorized reproduction, distribution, or commercial exploitation of our content is strictly prohibited.",
    ],
  },
  {
    id: "legal-tools",
    title: "Legal Tools & AI-Generated Content",
    subtitle: "How to use them responsibly",
    content: [
      "Agility AI offers access to intelligent legal automation including document generation, filings, translations, and case tracking.",
      "However:",
      "• We are not a law firm.",
      "• We do not offer legal advice or representation unless facilitated through verified third-party professionals.",
      "• AI-generated documents are for assistance only and must be reviewed by a legal expert before submission or reliance.",
      "You are fully responsible for validating, customizing, and using any output generated through our services.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data Privacy and Security",
    subtitle: "How we protect your data",
    content: [
      "We value your trust. Any data shared on our Platform is handled in accordance with our Privacy Policy and Data Protection Guidelines. In summary:",
      "• Your data remains your own.",
      "• We do not sell personal information.",
      "• We use data strictly to improve user experience and system intelligence.",
      "• We implement encryption, access controls, and audit mechanisms to protect your information.",
      "You consent to the collection and processing of your data as described.",
    ],
  },
  {
    id: "fees",
    title: "Fees, Payments, and Refunds",
    subtitle: "How billing works",
    content: [
      "Some features on the Platform are offered on a paid basis. Pricing models may include pay-per-use, subscriptions, or milestone-based charges.",
      "All fees are communicated upfront. Payment must be made through approved channels. Refunds are not guaranteed and will be evaluated case-by-case in the event of genuine service failure.",
      "All prices are inclusive of applicable taxes unless otherwise stated.",
      "We reserve the right to modify pricing or discontinue features with notice.",
    ],
  },
  {
    id: "availability",
    title: "Platform Availability",
    subtitle: "When services are available",
    content: [
      "We strive for uninterrupted service, but Agility AI may occasionally be unavailable due to maintenance, updates, or network issues. We are not liable for any loss caused by downtime, bugs, or disruptions outside our control.",
      "We reserve the right to add, remove, or change features without prior notice.",
    ],
  },
  {
    id: "termination",
    title: "Termination and Suspension",
    subtitle: "How accounts can end",
    content: [
      "We may suspend or terminate your access if:",
      "• You violate these Terms.",
      "• You misuse our platform or harm its integrity.",
      "• You engage in illegal activity using our tools.",
      "You may also delete your account at any time by contacting us at support@agilityai.in. Upon termination, access to your dashboard and tools will be revoked.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    subtitle: "Our legal disclaimers",
    content: [
      "Agility AI provides services “as is” and “as available.” We do not warrant that:",
      "• The Platform will be error-free or continuously available.",
      "• AI-generated content is legally sufficient or applicable to your specific situation.",
      "• Results obtained will meet your expectations.",
      "We disclaim all implied warranties, including merchantability and fitness for a particular purpose.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    subtitle: "Our legal responsibility",
    content: [
      "To the maximum extent permitted by law, Agility AI is not liable for:",
      "• Indirect, incidental, or consequential damages.",
      "• Errors in legal documents or submissions.",
      "• Actions or outcomes based on AI-generated suggestions.",
      "• Data loss or unauthorized access.",
      "Your sole remedy for dissatisfaction is to discontinue use of the Platform.",
    ],
  },
  {
    id: "law",
    title: "Governing Law and Dispute Resolution",
    subtitle: "Jurisdiction and disputes",
    content: [
      "These Terms shall be governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts located in New Delhi, India.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    subtitle: "Policy updates",
    content: [
      "Agility AI reserves the right to update or revise these Terms at any time. Any changes will be effective upon posting. Continued use of the Platform after changes means you accept the new Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    subtitle: "How to reach us",
    content: [
      "For questions, feedback, or legal concerns, please reach us at:",
      "Agility AI Pvt. Ltd.",
      "Email: service@agilityai.in",
      "Website: https://agilityai.co.in/",
      "Last updated: April 17, 2025",
    ],
  },
];

export default function AgilityAITermsPage() {
  const [activeSection, setActiveSection] = useState("about");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = termsSections.map((section) =>
        document.getElementById(section.id)
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero */}
      <motion.div
        className="relative overflow-hidden bg-white border-b border-slate-200"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Clock size={16} />
              Last updated: April 17, 2025
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Terms & Conditions
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Welcome to Agility AI Pvt. Ltd. (“Agility AI”, “we”, “our”, or
              “us”). These Terms and Conditions (“Terms”) govern your access to
              and use of our platform and services.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2 mt-8 text-green-700 bg-green-50 px-6 py-3 rounded-lg inline-flex"
              variants={itemVariants}
            >
              <CheckCircle2 size={20} />
              <span className="font-medium">
                Transparent & Human-First Legal Tech
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {termsSections.map((section) => {
                    const Icon =
                      sectionIcons[section.title.split(" ")[0]] || FileText;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg flex items-center gap-3 group transition-all duration-200 ${
                          activeSection === section.id
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            activeSection === section.id
                              ? "text-blue-600"
                              : "text-slate-400"
                          }
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {section.title}
                          </div>
                          <div className="text-xs opacity-70">
                            {section.subtitle}
                          </div>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`transition-transform ${
                            activeSection === section.id
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {termsSections.map((section, index) => {
                const Icon =
                  sectionIcons[section.title.split(" ")[0]] || FileText;
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-8 lg:p-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                            {index + 1}. {section.title}
                          </h2>
                          <p className="text-lg text-slate-600">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {section.content.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: pointIndex * 0.1,
                              duration: 0.5,
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-3" />
                            <p className="text-slate-700 leading-relaxed">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
