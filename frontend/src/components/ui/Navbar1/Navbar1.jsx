import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe2, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1F2937] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-white flex items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9504/9504143.png"
            alt="NyayaSahayak Logo"
            className="w-6 h-6 bg-white rounded-full p-0.5"
          />
          FairlySettled
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-4 order-2 sm:order-3 ml-auto">
          {/* Main Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-white">
            {["Solutions", "Resources", "Pricing", "Use Cases"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline hover:text-white text-blue-100 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Try it Free */}
          <button className="hidden sm:flex bg-[#3E3F5B] hover:bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full transition">
            Try it Free
          </button>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="space-y-2">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-white hover:text-blue-200 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
