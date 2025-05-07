"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>

      {/* === Content Section === */}
      <motion.div
        initial={{ opacity: 0.5, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="mt-64 max-w-6xl px-4 md:px-8 text-white text-base md:text-lg leading-relaxed space-y-6 text-justify"
      >
        <p>
          We're at the cusp of evolution—from a few driven builders to a
          mission-driven organization. While our culture is still taking shape,
          we remain anchored by core values: generosity of thought, clarity in
          communication, and a deep respect for collective knowledge.
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

        <p>
          We look for people who are sharp, curious, and unafraid to challenge
          conventional thinking. Our ideal team members thrive in ambiguity,
          adapt quickly, and take initiative without needing constant direction.
        </p>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      {/* === Lamp Effect Area === */}
      <div className="relative flex w-full h-[35rem] items-center justify-center isolate z-0">
        {/* Left glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Background layering */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Core Lamp Glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      {/* === Content Wrapper === */}
      <div className="relative z-50 -mt-48 flex flex-col items-center w-full">
        {children}
      </div>
    </div>
  );
};
