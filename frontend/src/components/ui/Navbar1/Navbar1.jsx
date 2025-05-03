import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileLoading from "@/components/ProfileLoading";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, userData } = useUserAuth();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-black shadow-md overflow-visible">
      <div className="max-w-7xl w-full mx-auto py-3 flex items-center justify-between gap-4 px-0 sm:px-4">
        {/* Sidebar on extreme left */}
        <div className="flex items-center justify-start flex-shrink-0">
          <Sidebar />
        </div>

        {/* Logo with margin from sidebar */}
        <div className="flex items-center ml-4 flex-1">
          <Link
            to="/"
            className="text-lg font-semibold tracking-wide text-white flex items-center gap-2"
          >
            <img
              src="/fairlySettledLogo.jpg"
              alt="brand"
              className="h-14 w-14 object-cover rounded-full"
            />
          </Link>
        </div>

        {/* Buttons on the right */}
        <div className="flex items-center gap-4 order-2 sm:order-3">
          <div className="hidden md:flex items-center space-x-6 text-sm text-white">
            {loading ? (
              <ProfileLoading />
            ) : (
              <>
                {userData ? (
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
              </>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="space-y-2">
            {userData ? (
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
          </div>
        </div>
      )}
    </nav>
  );
}
