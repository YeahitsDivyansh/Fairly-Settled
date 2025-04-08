import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  FileText,
  Upload,
  Star,
  Globe2,
  ChevronDown,
} from "lucide-react";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");

  const translations = {
    en: {
      search: "Search your legal questions...",
      talk: "Talk to AI Lawyer",
      draft: "Draft Legal Notice",
      upload: "Upload Document",
      benefits:
        "Experience the future of legal assistance with our AI-powered platform. Get expert advice, draft documents, and manage your legal needs effortlessly.",
      journey: "Your Legal Journey Made Effortless",
      journeyDesc:
        "Our platform simplifies legal processes with user-friendly tools and AI assistance. Enjoy seamless multilingual support, making legal help accessible to everyone.",
      testimonials: "Client Testimonials",
      testimonialsDesc: "Our clients love the support and efficiency.",
    },
    hi: {
      search: "अपने कानूनी प्रश्न खोजें...",
      talk: "AI वकील से बात करें",
      draft: "कानूनी नोटिस ड्राफ्ट करें",
      upload: "दस्तावेज़ अपलोड करें",
      benefits:
        "हमारे AI-संचालित प्लेटफॉर्म के साथ कानूनी सहायता का भविष्य अनुभव करें। विशेषज्ञ सलाह प्राप्त करें, दस्तावेज़ तैयार करें और अपनी कानूनी जरूरतों को आसानी से प्रबंधित करें।",
      journey: "आपकी कानूनी यात्रा हुई आसान",
      journeyDesc:
        "हमारा प्लेटफॉर्म उपयोगकर्ता-अनुकूल टूल्स और AI सहायता के साथ कानूनी प्रक्रियाओं को सरल बनाता है। बहुभाषी सहायता का आनंद लें, जो कानूनी मदद को सभी के लिए सुलभ बनाता है।",
      testimonials: "ग्राहक प्रशंसापत्र",
      testimonialsDesc: "हमारे ग्राहक सहायता और दक्षता को पसंद करते हैं।",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="w-full z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex flex-col items-center">
              <img
                src="https://assets.grok.com/users/7929acee-b58f-4690-9180-a01c0352a771/generated/TuJMLTd88NilIUgh/image.jpg"
                alt="FairlySettled Logo"
                className="w-32 h-25 mb-1 rounded-lg" // adjust size here (w = width, h = height)
              />
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <Globe2 size={20} />
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8">
            Your Legal Questions,
            <br />
            Answered Instantly
          </h1>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            {t.benefits}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              <MessageSquare size={20} />
              {t.talk}
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <FileText size={20} />
              {t.draft}
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Upload size={20} />
              {t.upload}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.journey}</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.journeyDesc}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {t.testimonials}
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            {t.testimonialsDesc}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
                quote: "The AI Lawyer made my legal process so much easier!",
              },
              {
                name: "Anjali Sharma",
                role: "Legal Consultant",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
                quote: "I was able to draft my notice in minutes!",
              },
              {
                name: "Vikram Singh",
                role: "Startup Founder",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
                quote: "The Document Analysis feature saved me hours of work!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  User Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 FairlySettled. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
