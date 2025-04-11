// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Search, Globe2, ChevronDown } from "lucide-react";
 import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ language, setLanguage, searchQuery, setSearchQuery }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useAuth();
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
    <nav className="w-full shadow-[0_2px_4px_-1px_rgba(0,0,0,1)] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="text-lg font-semibold tracking-wide flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9504/9504143.png"
            alt="NyayaSahayak Logo"
            className="w-6 h-6"
          />
          NyayaSahayak
        </div>

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

        <div className="flex items-center gap-4 order-2 sm:order-3 ml-auto">
          <div className="flex items-center gap-4">
          {user ? (
                <button
                  onClick={() => navigate("/profile")}
                  className="text-black-800 bg-gray-500 text-sm px-4 py-1.5 rounded-full hover:bg-gray-300 hover:cursor-pointer"
                >
                  Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 hover:cursor-pointer"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => navigate("/signin")}
                    className="text-black-800 bg-gray-500 text-sm px-4 py-1.5 rounded-full hover:bg-gray-300 hover:cursor-pointer"
                  >
                    Log in
                  </button>
                </>
              )}
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
  );
};

export default Navbar;