import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-12 gap-y-10">
        {/* Company Info */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">FairlySettled</h2>
          <p className="text-sm mb-4 text-white">
            Empowering people with legal tools powered by AI. Secure,
            multilingual and made for India.
          </p>
          <div className="flex items-center gap-3 text-sm text-white mb-2">
            <FaEnvelope className="text-blue-400" />{" "}
            <span>support@fairlysettled.in</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white">
            <FaPhoneAlt className="text-blue-400" />{" "}
            <span>+91 98765 43210</span>
          </div>
        </motion.div>

        {/* Explore */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/about us" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-400 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/lawyers" className="hover:text-blue-400 transition">
                Find a Lawyer
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-blue-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/data-protection"
                className="hover:text-blue-400 transition"
              >
                Data Protection
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-blue-400 transition">
                Disclaimer
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Stay Updated</h3>
          <p className="text-sm mb-3 text-white">
            Get legal news, AI tools & platform updates weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full border border-gray-600 bg-[#3E3F5B] text-white placeholder-white focus:outline-none focus:ring-2 w-full text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="border-t border-gray-700 my-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-2 text-sm text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-sm font-semibold">
          &copy; 2025 FairlySettled. All rights reserved.
        </p>
        <div className="flex gap-5 mt-4 md:mt-0">
          <Link
            to="https://x.com/agilityai564"
            className="hover:text-[#8F87F1] text-white transition"
          >
            <FaXTwitter size={24} />
          </Link>
          <Link
            to="https://www.linkedin.com/posts/agility-ai-pvt-ltd_ai-aiprototyping-businesssolutions-activity-7315728608163942402-_1ZY?utm_source=share&utm_medium=member_ios&rcm=ACoAAETUSCkBKkCGeBpPsq4_7VnwIuHEjfgHTYk"
            className="hover:text-[#8F87F1] text-white transition"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            to="https://www.instagram.com/reel/DH8s_34S_gD/?igsh=MWM4ajRucTkzdnF6cQ=="
            className="hover:text-[#8F87F1] text-white transition"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
