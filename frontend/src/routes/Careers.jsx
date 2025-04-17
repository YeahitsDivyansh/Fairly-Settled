import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const roles = [
  {
    category: "Engineering",
    openRoles: 3,
    positions: ["Full Stack Developer", "ML/AI Engineer", "UI/UX Developer"],
  },
  {
    category: "Legal",
    openRoles: 4,
    positions: [
      "Advocate",
      "Legal Associate",
      "Legal Intern",
      "Legal Researcher",
    ],
  },
  {
    category: "Non Legal",
    openRoles: 2,
    positions: ["HR Manager", "Content Writer"],
  },
];

const Careers = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (category) => {
    setExpanded(expanded === category ? null : category);
  };

  return (
    <section className="bg-[#9db6d9bd] px-4 py-16 md:py-24 mx-auto text-center">
      <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-4">
        Careers at FairlySettled
      </h4>

      <h1 className="text-[#1F2937] text-6xl md:text-5xl font-extrabold leading-tight mt-6">
        Shape legal systems with{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          purpose & precision
        </span>
      </h1>

      <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
        We're reimagining the legal system for speed, accessibility, and impact.
        Our work centers on eliminating the bottlenecks that slow down justice —
        from tedious paperwork to outdated processes. Enter{" "}
        <strong>Agility AI</strong>: an intelligent platform that automates case
        filing, document generation, and real-time tracking. But it’s more than
        just automation — it’s a shift in how legal institutions function. By
        embedding precision, transparency, and speed into every layer,{" "}
        <strong>Agility AI</strong> empowers legal professionals to focus on
        strategy and advocacy rather than administrative grind. Our team spans
        law, technology, public policy, and the sciences — united by a mission
        to build smarter systems that serve both people and principle. We
        believe the future of law should be fast, fair, and fundamentally human.
      </p>

      <Button
        variant="outline"
        className="mt-8 bg-gray-800 text-white hover:bg-blue-900 font-semibold text-base px-6 py-3"
      >
        Have a look at our Open Roles
      </Button>

      {/* Role Section */}
      <div className="max-w-3xl mx-auto mt-12 space-y-8 text-left relative">
        {roles.map(({ category, openRoles, positions }) => (
          <div
            key={category}
            className="relative rounded overflow-hidden transition-transform duration-300 hover:scale-102 hover:-translate-y-1"
          >
            {/* Glow Background */}
            <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-600 to-gray-800 opacity-30 blur-xl animate-pulse"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 bg-white shadow-sm rounded-lg overflow-hidden">
              <div
                onClick={() => toggleExpand(category)}
                className="flex justify-between items-center p-4 transition cursor-pointer"
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {openRoles} Open Role{openRoles > 1 ? "s" : ""}
                  </p>
                </div>
                {expanded === category ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>

              {/* Expanded Positions */}
              {expanded === category && (
                <div className="px-6 pb-4 space-y-3">
                  {positions.map((position, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-gray-200 pb-3"
                    >
                      <span className="text-gray-800 font-medium">
                        {position}
                      </span>
                      <Button className="text-sm shadow-md px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">
                        Apply
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* How we hire / What we offer */}
      <div className="max-w-3xl mx-auto mt-20 text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How We Hire / What We Offer
        </h2>
        <p className="text-gray-700 text-base leading-relaxed space-y-2">
          We're at the cusp of evolution—from a few driven builders to a
          mission-driven organization. While our culture is still taking shape,
          we remain anchored by core values: generosity of thought, clarity in
          communication, and a deep respect for collective knowledge. We lean
          into first principles, and we believe true expertise is marked not
          only by insight, but by humility and the ability to teach.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          We look for people who are sharp, curious, and a little
          unconventional. Those who thrive in ambiguity, learn quickly, and are
          eager to take initiative. We believe interest, intent, and potential
          matter more than credentials or traditional experience.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          In return, we promise clarity and candor about roles,
          responsibilities, and what success looks like. Equity is not an
          afterthought—we’re generous because we see this as shared ownership.
          We also believe in flexible paths: you help shape your role here, not
          the other way around.
        </p>
      </div>
    </section>
  );
};

export default Careers;
