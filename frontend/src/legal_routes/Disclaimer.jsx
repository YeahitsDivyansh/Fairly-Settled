import React from "react";

const Disclaimer = () => {
  return (
    <section className="bg-[#9db6d9bd] mx-auto py-16 px-6 text-left">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Disclaimer
      </h1>

      <p className="text-gray-700 mt-6">
        Agility AI is a technology enabler—not a substitute for legal advice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">General Use</h2>
      <p className="text-gray-700">
        The content, templates, and AI recommendations provided on our platform
        are for informational and facilitative purposes only. They are not
        intended to replace qualified legal consultation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">User Responsibility</h2>
      <p className="text-gray-700">
        You are responsible for the decisions you make using our tools. Any
        legal filings or actions should be reviewed by a certified legal
        professional.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Third-Party Links and Tools
      </h2>
      <p className="text-gray-700">
        We may include or integrate third-party APIs, links, or content. Agility
        AI is not responsible for their reliability or accuracy.
      </p>

      <p className="text-gray-600 text-sm mt-6">Last updated: April 17, 2025</p>
    </section>
  );
};

export default Disclaimer;
