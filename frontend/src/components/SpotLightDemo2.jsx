import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/animations/Spotlight";

export function SpotlightPreview2() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Content Section */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Right: Quote Section */}
        <div className="max-w-xl text-center md:text-left md:ml-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f8f8f8] via-[#d3d3d3] to-[#c0c0c0] animate-shimmer bg-[length:200%_100%] leading-snug">
            “Purpose fuels progress. Let yours inspire change.”
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Welcome back to <strong>FairlySettled</strong>, powered by{" "}
            <strong>Agility AI</strong>. Let’s make a difference together.
          </p>
        </div>
      </div>
    </div>
  );
}
