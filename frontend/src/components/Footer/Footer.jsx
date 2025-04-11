import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#42536a] text-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-12 gap-y-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">FairlySettled</h2>
          <p className="text-sm mb-4 text-gray-400">
            Empowering people with legal tools powered by AI. Secure, multilingual and made for India.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
            <FaEnvelope className="text-blue-400" /> <span>support@fairlysettled.in</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FaPhoneAlt className="text-blue-400" /> <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Data Protection</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Disclaimer</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Stay Updated</h3>
          <p className="text-sm mb-3 text-gray-400">
            Get legal news, AI tools & platform updates weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-2 text-sm text-gray-400">
        <p>&copy; 2024 FairlySettled. All rights reserved.</p>
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaLinkedin size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaFacebookF size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
