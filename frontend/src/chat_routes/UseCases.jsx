import React from "react";

const UseCases = () => {
  return (
    <section className="bg-[#9db6d9bd] px-6 py-16 text-gray-800 mx-auto">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Use Cases
      </h1>
      <p className="mt-6">
        Real tools for real people — across the legal spectrum. Agility AI isn’t
        built for edge cases. It’s built for everyday justice — the kind that
        impacts real lives, real livelihoods, and real rights.
      </p>

      <div className="space-y-6 mt-6">
        <div>
          <h2 className="text-2xl font-bold">1. For Individuals & Citizens</h2>
          <ul className="list-disc ml-6">
            <li>File a Consumer Complaint in under 15 minutes.</li>
            <li>
              Generate Rent Agreements or loan contracts with zero legal
              background.
            </li>
            <li>Track court cases across India with updates.</li>
            <li>
              Know your rights on workplace harassment, privacy, and more.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">2. For Lawyers & Legal Teams</h2>
          <ul className="list-disc ml-6">
            <li>Automate documentation and form filling.</li>
            <li>Manage client matters and track status.</li>
            <li>Onboard clients faster with smart forms.</li>
            <li>Build clause libraries with AI tagging.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            3. For Startups & Small Businesses
          </h2>
          <ul className="list-disc ml-6">
            <li>Create contracts for hiring, IP, vendors, and more.</li>
            <li>Use smart mediation tools to resolve disputes affordably.</li>
            <li>Ensure legal compliance with data/privacy laws.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">4. For NGOs & Legal Clinics</h2>
          <ul className="list-disc ml-6">
            <li>Automate community casework.</li>
            <li>Use multilingual explainers for broader reach.</li>
            <li>Track impact with dashboards.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">5. For Students & Educators</h2>
          <ul className="list-disc ml-6">
            <li>Simulate legal processes in Justice Labs.</li>
            <li>Access databases and advocacy tools.</li>
            <li>Use for clinics, research, and moots.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
