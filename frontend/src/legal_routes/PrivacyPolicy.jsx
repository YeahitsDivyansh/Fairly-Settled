import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white mx-auto py-16 px-6 text-left">

      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-800 mt-8 font-simple mb-4">
        At Agility AI, your trust is foundational to our innovation. We believe
        that privacy isn’t just a right—it’s a responsibility we uphold with the
        utmost care. We don’t just protect data; we protect dignity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What We Collect</h2>
      <p className="text-gray-700 mb-4">
        Only the essentials. When you interact with our platform—whether as a
        legal professional, an individual filing a case, or a curious visitor—we
        may collect basic identifiers (like name, email), interaction history,
        and system usage patterns. We do not collect sensitive legal information
        without your explicit consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use It</h2>
      <p className="text-gray-700 mb-4">
        We use your data solely to improve our service delivery—streamlining
        your legal processes, tailoring content, and innovating responsibly.
        Your data helps our AI learn with intention, not intrusion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Store It</h2>
      <p className="text-gray-700 mb-4">
        All user data is encrypted end-to-end. We follow a principle of
        purpose-limited retention: we don’t keep your data longer than we need
        to.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. No Secrets. No Sellouts.
      </h2>
      <p className="text-gray-700 mb-4">
        We don’t sell your data. We don’t share it unless legally mandated. And
        we never use it to market third-party services without your clear
        consent.
      </p>

      <p className="text-gray-600 text-sm mt-6">Last updated: April 17, 2025</p>
    </section>
  );
};

export default PrivacyPolicy;
