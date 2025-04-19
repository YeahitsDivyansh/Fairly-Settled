import React from "react";

const Resources = () => {
  return (
    <section className="bg-[#9db6d9bd] px-6 py-16 text-gray-800 mx-auto">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Resources
      </h1>
      <p className="mt-6">
        Legal empowerment begins with the right tools. Here’s your launchpad.
      </p>
      <p className="mt-6">
        At Agility AI, we believe access to law shouldn’t require access to
        privilege. That’s why we’ve curated a suite of intelligent, easy-to-use
        resources designed to help individuals and legal professionals navigate
        legal systems confidently.
      </p>
      <ul className="list-disc mt-6 space-y-4">
        <li>
          <strong>Smart Templates & Legal Kits:</strong> AI-customized legal
          documents like NDAs, tenancy agreements, wills, and more — legally
          sound and ready for real life.
        </li>
        <li>
          <strong>Interactive Law Guides:</strong> Plain-language explainers for
          legal processes.
        </li>
        <li>
          <strong>AI-Powered Form Fillers:</strong> Auto-complete legal forms
          with smart automation.
        </li>
        <li>
          <strong>Ask AI – Legal FAQ Bot:</strong> Our assistant answers legal
          questions with context.
        </li>
      </ul>
    </section>
  );
};

export default Resources;
