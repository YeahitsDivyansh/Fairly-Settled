import React, { useState, useRef, useEffect } from "react";
import { Search, Globe2, ChevronDown } from "lucide-react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Navbar = ({ language, setLanguage, searchQuery, setSearchQuery }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userData } = useUserAuth();
  const navigate = useNavigate();

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
    <nav className="w-full bg-[#6F826A] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide text-white flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9504/9504143.png"
            alt="NyayaSahayak Logo"
            className="w-6 h-6"
          />
          <a href="/"> FairlySettled</a>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-lg order-3 sm:order-2 sm:ml-[3rem]">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-[#3E3F5B] text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
              size={18}
            />
          </motion.div>
        </div>

        {/* Buttons & Language */} 
        <div className="flex items-center gap-4 order-2 sm:order-3 ml-auto">
          <div className="flex items-center gap-4">
            {userData ? (
              <motion.button
                onClick={() => navigate("/profile")}
                className="text-gray-100 bg-[#4F6D8A] text-sm px-4 py-1.5 rounded-full hover:bg-blue-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {userData.username}
              </motion.button>
            ) : (
              <>
                <motion.button
                  onClick={() => navigate("/phonesignup")}
                  className="bg-[#3E3F5B] text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-500 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign up
                </motion.button>
                <motion.button
                  onClick={() => navigate("/phonesignin")}
                  className="text-gray-100 bg-[#3E3F5B] border border-gray-500 hover:bg-white hover:text-black cursor-pointer text-sm px-4 py-1.5 rounded-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Log in
                </motion.button>
              </>
            )}

            {/* Language Dropdown */}
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                type="button"
                className="inline-flex justify-center items-center gap-1 text-sm text-gray-100 hover:bg-[#4b5d6c] px-3 py-1.5 rounded-full transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe2 size={18} />
                <span>{language === "en" ? "English" : "हिंदी"}</span>
                <ChevronDown size={14} />
              </motion.button>

              {isDropdownOpen && (
                <motion.div
                  className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    <motion.button
                      onClick={() => {
                        setLanguage("en");
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      English
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setLanguage("hi");
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      हिंदी
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
