import React from "react";

const DataProtection = () => {
  return (
    <section className="bg-[#9db6d9bd] mx-auto py-16 px-6 text-left">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Data Protection
      </h1>

      <p className="text-gray-700 mt-6">
        At Agility AI, we believe your data tells a story—and we’re here to
        guard it like it’s our own. Our human-first data philosophy is built on
        a foundation of trust, transparency, and respect. This commitment isn’t
        just about regulatory compliance—it’s about care. We employ
        zero-compromise security through AES 256-bit encryption, multi-factor
        authentication, regular vulnerability audits, and 24x7 monitoring with
        redundant backups to ensure your data is always protected.
      </p>

      <p className="text-gray-700 mt-6">
        Our AI operates with ethics at its core. Models are trained only on
        anonymized datasets, regularly audited for bias, and designed to empower
        users—not surveil them. You are always in control of your data. Whether
        you want to download it, delete it, or correct it—you can do so anytime,
        with complete clarity over what you share and when.
      </p>

      <p className="text-gray-700 mt-6">
        We’re also compliance-ready, aligning with GDPR, India’s PDPB, and other
        global data regulations. No matter where you're located, your
        information is in safe, responsible hands. At Agility AI, your privacy
        is not a checkbox—it’s a promise.
      </p>

      <p className="text-gray-600 text-sm mt-6">Last updated: April 17, 2025</p>
    </section>
  );
};

export default DataProtection;
