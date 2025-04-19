import { Link } from "react-router-dom";
import { Globe2, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1F2937] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="./fairlySettledLogo.jpg"
            alt="FairlySettled Logo"
            className="w-15 h-15 rounded-full"
          />
        </Link>
        <span className="text-lg text-white font-semibold tracking-wide hidden sm:inline">
          FairlySettled
        </span>

        {/* Buttons */}
        <div className="flex items-center gap-4 order-2 sm:order-3 ml-auto">
          {/* Main Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-white">
            {[
              { name: "Solutions", path: "/solutions" },
              { name: "Resources", path: "/resources" },
              { name: "Pricing", path: "/pricing" },
              { name: "Use Cases", path: "/use-cases" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:underline hover:text-white text-blue-100 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Try it Free */}
          <button className="hidden sm:flex bg-[#3E3F5B] hover:bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full transition">
            Try it Free
          </button>
        </div>
      </div>
    </nav>
  );
}
