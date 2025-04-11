// src/context/TranslationContext.js
import React, { createContext, useState , useContext} from "react";

const TranslationContext = createContext();

 const translations = {
  en: {
    search: "Search your legal questions...",
    talk: "Talk to AI Lawyer",
    draft: "Draft Legal Documents",
    upload: "Document summarizer",
    benefits: "Experience the future of legal assistance...",
    journey: "Your Legal Journey Made Effortless",
    journeyDesc: "Our platform simplifies legal processes...",
    testimonials: "Client Testimonials",
    testimonialsDesc: "Our clients love the support and efficiency.",
  },
  hi: {
    search: "अपने कानूनी प्रश्न खोजें...",
    talk: "AI वकील से बात करें",
    draft: "कानूनी दस्तावेज़ों का मसौदा तैयार करें",
    upload: "दस्तावेज़ सारांश",
    benefits: "हमारे AI-संचालित प्लेटफॉर्म के साथ कानूनी सहायता...",
    journey: "आपकी कानूनी यात्रा हुई आसान",
    journeyDesc: "हमारा प्लेटफॉर्म उपयोगकर्ता-अनुकूल टूल्स...",
    testimonials: "ग्राहक प्रशंसापत्र",
    testimonialsDesc: "हमारे ग्राहक सहायता और दक्षता को पसंद करते हैं।",
  },
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);