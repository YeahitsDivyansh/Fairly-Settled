"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/animations/lamp";

export function LampDemo() {
  return (
    <LampContainer className="mt-16">
      <motion.div
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="md:px-20 text-white text-base md:text-[15px] leading-7 md:leading-7 space-y-5 text-justify"
      >
        <h2 className="py-8 text-5xl md:text-5xl font-extrabold text-center mb-6">
          How We Hire / What We Offer
        </h2>

        <p>
          We're at the cusp of evolution—from a few driven builders to a
          mission-driven organization. While our culture is still taking shape,
          we remain anchored by core values: generosity of thought, clarity in
          communication, and a deep respect for collective knowledge. We
          approach problems from first principles and believe that true
          expertise is reflected not only through insight, but through humility,
          mentorship, and continuous learning. We're not just building a
          team—we're cultivating a shared philosophy.
        </p>

        <p>
          We look for people who are sharp, curious, and unafraid to challenge
          conventional thinking. Our ideal team members thrive in ambiguity,
          adapt quickly, and take initiative without needing constant direction.
          We're more interested in a person's trajectory than their resume—what
          drives them, how they think, and the impact they want to create.
          Whether you're self-taught or formally trained, what matters most is
          how you approach problems and grow from them.
        </p>

        <p>
          In return, we provide a high-trust environment where roles are clearly
          defined yet flexible enough to evolve with you. We’re transparent
          about expectations, performance, and what success looks like from day
          one. Compensation includes meaningful equity, because we believe
          deeply in shared ownership and long-term alignment. Here, your career
          path isn’t predetermined—you have the freedom and support to shape it
          yourself, backed by a team that wants you to thrive.
        </p>

        {/* === Animated Image Row === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
          {[
            {
              src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1000&auto=format&fit=crop&q=60",
              alt: "Team Collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1573166826272-5acd0ef8f650?w=1000&auto=format&fit=crop&q=60",
              alt: "Creative Workspace",
            },
            {
              src: "https://images.unsplash.com/photo-1740818575141-410fd9685c28?w=1000&auto=format&fit=crop&q=60",
              alt: "Focused Individual",
            },
          ].map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt={img.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="rounded-2xl shadow-lg w-full h-auto"
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
}
