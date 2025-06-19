import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, FileCheck2 } from "lucide-react";

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

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white border-b border-slate-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
          <motion.h1
            className="mt-10 text-4xl lg:text-6xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Data Protection
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Your privacy is our priority. We guard your data with
            state-of-the-art security, clear policies, and a promise of
            transparency.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-8 lg:py-12">
        <motion.div
          className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <ShieldCheck size={28} className="text-blue-600" />
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              At Agility AI, your data tells a story—and we protect it like it’s
              our own. Our human-first approach ensures trust, transparency, and
              respect at every step. We back this with AES 256-bit encryption,
              multi-factor authentication, regular audits, and 24×7 monitoring
              with redundant backups.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lock size={28} className="text-blue-600" />
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              Our AI runs on ethics: models use only anonymized data, undergo
              bias audits, and are designed to empower—not surveil. You control
              your data: download, delete, or correct it anytime with full
              clarity.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Globe size={28} className="text-blue-600" />
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              We align with global privacy laws including GDPR, India’s PDPB,
              and more—protecting your information no matter where you are. At
              Agility AI, privacy isn’t a checkbox. It’s our promise.
            </p>
          </motion.div>

          <motion.div
            className="text-right text-sm text-slate-500 pt-2"
            variants={itemVariants}
          >
            Last updated: April 17, 2025
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
