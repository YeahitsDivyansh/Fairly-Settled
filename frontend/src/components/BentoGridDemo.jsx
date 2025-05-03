import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/animations/BentoGrid";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Contract Automation",
    description:
      "Generate and manage contracts effortlessly using smart templates and AI assistance.",
    header: (
      <img
        src="https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full shadow-gray-400 h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Legal Analytics",
    description:
      "Get data-driven insights from past judgments and legal trends to support decision-making.",
    header: (
      <img
        src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Signatures",
    description:
      "Sign and authenticate documents securely with compliant e-signature tools.",
    header: (
      <img
        src="https://images.pexels.com/photos/4440885/pexels-photo-4440885.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Case Management",
    description:
      "Organize, track, and collaborate on legal cases in one central hub.",
    header: (
      <img
        src="https://images.pexels.com/photos/8369524/pexels-photo-8369524.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Stay updated with evolving laws and automate compliance tracking.",
    header: (
      <img
        src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Client Portals",
    description:
      "Provide clients with secure, 24/7 access to case updates and documents.",
    header: (
      <img
        src="https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Legal Research",
    description:
      "Use natural language search to discover relevant case law and regulations faster.",
    header: (
      <img
        src="https://images.pexels.com/photos/17484975/pexels-photo-17484975/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-can-help-humans-to-understand-the-complexity-of-biology-it-was-created-by-artist-khyati-trehan-as-part.png?auto=compress&cs=tinysrgb&w=600"
        alt="Contract Automation"
        className="w-full h-32 object-cover rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
