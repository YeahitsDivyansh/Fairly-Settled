"use client";
import { WavyBackground } from "@/animations/wavy-background";
import { motion } from "framer-motion";
import React from "react";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="min-h-screen items-center justify-center px-4 mt-40">
      <motion.div
        className="text-black text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Your Initial Consultation
        </h2>

        <p className="text-lg mb-6">
          You are our family and we will help you like we help our own family
          members. This means having your best long-term interests in mind as we
          negotiate, compromise, settle or resolve your matter in Court if need
          be. Separation is emotionally and financially exhausting...
        </p>

        <p className="text-lg font-semibold mb-6">
          We do not ask you to choose us. We ask you to choose the right lawyer.
          Whether that is us or someone else is irrelevant.
        </p>

        <p className="text-lg mb-6">
          We invite you to consult with a couple of family lawyers prior to
          choosing who you better connect with. We charge for our initial
          consultation because we want serious clients who know of us and trust
          us before they come in...
        </p>

        <p className="text-lg">
          <strong>Fairly Settled</strong> is committed to providing you with
          strategic advice for all of your family law needs. Our award-winning
          legal team, powered by <strong>Agility AI</strong>, is here to support
          your journey to fair and informed resolutions.
        </p>
      </motion.div>
    </WavyBackground>
  );
}
