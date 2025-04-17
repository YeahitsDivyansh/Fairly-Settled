import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    question: "What is FairlySettled?",
    answer: `FairlySettled is an AI-powered legal tech platform built to streamline legal workflows for lawyers, firms, and clients alike. At its core, FairlySettled empowers users to analyze legal documents, generate high-quality legal drafts, and get instant support through an intelligent chatbot assistant — all in one seamless interface.

Whether you're reviewing contracts, drafting petitions, or preparing case summaries, FairlySettled accelerates your work using state-of-the-art natural language processing and domain-specific AI models. Our platform doesn’t just automate — it enhances legal precision, ensuring that your output is not just faster, but smarter.`,
  },
  {
    question: "How can FairlySettled enhance my legal practice?",
    answer: `FairlySettled boosts efficiency in legal workflows by eliminating repetitive manual work, enabling secure document handling, facilitating real-time collaboration, and simplifying client interactions — all within a unified, AI-driven platform.`,
  },
  {
    question: "What sets FairlySettled apart from other legal tech tools?",
    answer: `FairlySettled stands out with its seamless blend of user-centric design, AI-native features, and full-spectrum legal workflow automation — offering a smarter, faster, and more intuitive experience than traditional solutions.`,
  },
];

const FAQ = () => {
  return (
    <div className="bg-[#9db6d9bd] py-8 px-8 md:px-6 mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-xl text-center text-gray-700 mb-10">
        Ask & you shall receive
      </p>

      <Accordion type="single" collapsible className="space-y-6">
        {faqData.map((faq, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="border-0" // ✅ removes the line under AccordionItem
          >
            <Card className="relative bg-white shadow-md rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-102 hover:-translate-y-1">
              {/* ✅ Internal glow/blur effect */}
              <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-600 to-gray-700 opacity-30 blur-xl animate-pulse"></div>

              {/* Foreground content */}
              <div className="relative z-10">
                <AccordionTrigger className="text-[#1F2937] px-6 py-4 text-left text-xl font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="text-gray-800 text-lg whitespace-pre-line px-6 pb-6">
                    {faq.answer}
                  </CardContent>
                </AccordionContent>
              </div>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
