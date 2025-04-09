"use client";

import { cn } from "@/lib/utils";

export default function AuroraBackground({ children, className }) {

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-background p-20 shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
