// Home.jsx
import React, { useState } from "react";
import { useTranslation } from "@/components/TranslationContext/TranslationContext";
import MidSection from "@/components/Mid_Section/Mid_Section";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { language, setLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <MidSection
        language={language}
        setLanguage={setLanguage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;
