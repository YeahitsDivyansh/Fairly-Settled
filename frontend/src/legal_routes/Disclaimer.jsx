import React from "react";
import { AlertTriangle, CheckCircle, Link as LinkIcon } from "lucide-react"; // Optional icons

const Disclaimer = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Agility AI is a technology enabler — not a substitute for legal
            advice.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12 space-y-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 lg:p-10 space-y-6">
          {/* General Use */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <AlertTriangle size={28} className="text-yellow-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">General Use</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                The content, templates, and AI recommendations provided on our
                platform are for informational and facilitative purposes only.
                They are not intended to replace qualified legal consultation.
              </p>
            </div>
          </div>

          {/* User Responsibility */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle size={28} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                User Responsibility
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                You are responsible for the decisions you make using our tools.
                Any legal filings or actions should be reviewed by a certified
                legal professional.
              </p>
            </div>
          </div>

          {/* Third-Party Links and Tools */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <LinkIcon size={28} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Third-Party Links and Tools
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                We may include or integrate third-party APIs, links, or content.
                Agility AI is not responsible for their reliability or accuracy.
              </p>
            </div>
          </div>

          <div className="text-right text-sm text-slate-500 pt-2">
            Last updated: April 17, 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
