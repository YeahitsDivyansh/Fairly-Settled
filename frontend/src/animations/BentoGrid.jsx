import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 gap-4 md:auto-rows-[24rem] md:grid-cols-3",
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
  return (
    <div
      className={cn(
        "group/bento shadow-lg row-span-1 flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-gray-100 dark:border-white/[0.2] dark:bg-neutral-900 dark:hover:from-neutral-900 dark:hover:to-neutral-800",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-1 text-lg font-semibold tracking-tight text-white">
          {title}
        </div>
        <div className="text-sm leading-relaxed text-gray-200">
          {description}
        </div>
      </div>
    </div>
  );
};
