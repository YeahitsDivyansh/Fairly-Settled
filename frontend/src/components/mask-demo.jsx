"use client";
import { MaskContainer } from "@/animations/svg-mask-effect";
export function SVGMaskEffectDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            "Injustice anywhere is a threat to justice everywhere." — Martin
            Luther King Jr.
          </p>
        }
        className="h-[40rem] rounded-md border text-white dark:text-black"
      >
        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-200 dark:text-white">
          Experience the future of law with{" "}
          <span className="text-blue-500">AI-driven insights</span> and{" "}
          <span className="text-blue-500">secure digital workflows</span> for
          seamless justice delivery.
        </p>
      </MaskContainer>
    </div>
  );
}
