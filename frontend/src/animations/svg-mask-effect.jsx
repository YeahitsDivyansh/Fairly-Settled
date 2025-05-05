"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 500,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", updateMousePosition);
    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // ✅ Hide circle completely when not hovered
  const maskSize = isHovered ? revealSize : 0;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen w-full overflow-hidden", className)}
    >
      {/* Background reveal text - always visible */}
      <div className="absolute inset-0 z-0 flex items-center justify-center text-black dark:text-white">
        {revealText}
      </div>

      {/* Masked children content - only visible inside mask */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center bg-white text-6xl text-black dark:bg-white dark:text-black [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 max-w-4xl text-center text-4xl font-bold"
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
