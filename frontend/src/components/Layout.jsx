import React,{ useState } from "react";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer"; // Import the Footer component
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
    const { language, setLanguage } = useTranslation();
  return (
    <div>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> {/* Navbar remains persistent */}
      <Outlet /> {/* Nested routes will be rendered here */}
      <Footer /> {/* Footer remains persistent */}
    </div>
  );
};

export default Layout;