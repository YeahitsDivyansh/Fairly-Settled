import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group/bento overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-gray-300 dark:shadow-none",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner Blur Background Animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -inset-4 z-0 rounded-3xl bg-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1} }}
            exit={{ opacity: 0, transition: { duration: 1} }}
          />
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-black">
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
