import React, { useState, useRef, useEffect } from "react";
import { Globe2, ChevronDown, Menu } from "lucide-react";
import { useUserAuth } from "@/context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProfileLoading from "../ProfileLoading";

const Navbar = ({ language, setLanguage }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loading, userData } = useUserAuth();
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

  const navLinks = [
    { name: "About Us", path: "/about us" },
    { name: "Careers", path: "/careers" },
    { name: "Find a Lawyer", path: "/lawyers" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <Link to="/">
            <img
              src="./fairlySettledLogo.jpg"
              alt="FairlySettled Logo"
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <Link to="/">
            <span className="text-lg font-semibold tracking-wide hidden sm:inline">
              FairlySettled
            </span>
          </Link>
        </div>

        {/* Right-side content: NavLinks + Buttons + Dropdown + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Nav Links (desktop only) */}
          <div className="hidden sm:flex gap-6 text-white text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          {loading ? (
            <ProfileLoading />
          ) : userData ? (
            <motion.button
              onClick={() => navigate("/profile")}
              className="text-white bg-blue-600 text-sm px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {userData.username}
            </motion.button>
          ) : (
            <>
              <motion.button
                onClick={() => navigate("/phonesignup")}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
              <motion.button
                onClick={() => navigate("/phonesignin")}
                className="text-white bg-gray-700 border border-gray-500 hover:bg-white hover:text-gray-900 cursor-pointer text-sm px-4 py-1.5 rounded-full transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
            </>
          )}

          {/* Language Dropdown */}
          {/* <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="inline-flex justify-center items-center gap-1 text-sm text-white hover:bg-gray-700 px-3 py-1.5 rounded-full transition"
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
          </div> */}

          {/* Hamburger (mobile only) */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="sm:hidden bg-black text-white flex flex-col gap-3 px-6 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
