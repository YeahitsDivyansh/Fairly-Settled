// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import {useTranslation} from "@/components/TranslationContext/TranslationContext";
import MidSection from "@/components/Mid_Section/Mid_Section";
import Footer from "@/components/Footer/Footer";




const App = () => {

  const [searchQuery, setSearchQuery] = useState("");
  
  const { t, language, setLanguage } = useTranslation();

  

 

  return (
    
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar
      language={language}
      setLanguage={setLanguage}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />


      {/* Hero Section */}
      <MidSection
      language={language}
      setLanguage={setLanguage}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />

      {/* Footer */}
      <Footer/>
    </div>
   
  );
};

export default App;
