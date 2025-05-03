import React from "react";
import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { FloatingDock } from "@/animations/floating-doc";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/agilityai564",
    },
    {
      title: "LinkdeIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/posts/agility-ai-pvt-ltd_ai-aiprototyping-businesssolutions-activity-7315728608163942402-_1ZY?utm_source=share&utm_medium=member_ios&rcm=ACoAAETUSCkBKkCGeBpPsq4_7VnwIuHEjfgHTYk",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/reel/DH8s_34S_gD/?igsh=MWM4ajRucTkzdnF6cQ==",
    },
  ];
  return (
    <div className="flex items-end justify-end w-full px-6">
      <FloatingDock items={links} className="!right-6 !left-auto !bottom-10" />
    </div>
  );
}
