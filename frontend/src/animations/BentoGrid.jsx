import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        "mx-auto max-w-7xl gap-5 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-gray-100 dark:border-white/[0.2] dark:bg-gray-300 dark:shadow-none",
        className
      )}
    >
      {/* Animated Blur Background */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -inset-4 z-0 rounded-3xl bg-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          />
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-700 dark:text-black">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-black">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
