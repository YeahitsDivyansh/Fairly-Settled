import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardData = [
  {
    title: "Rent Agreement",
    desc: "A legally binding contract between landlord and tenant. Generate it in seconds.",
    img: "/rent-agreement.jpeg",
  },
  {
    title: "Employment Contract",
    desc: "A formal agreement between employer and employee outlining responsibilities.",
    img: "/employment_agreement_img.jpg",
  },
  {
    title: "NDA (Non-Disclosure)",
    desc: "Protect your confidential info with an NDA in a few clicks.",
    img: "/NDA_img.jpg",
  },
  {
    title: "Partnership Deed",
    desc: "Create an agreement to start your business partnership easily.",
    img: "/Partnership_deed_img.jpg",
  },
  {
    title: "Freelancer Contract",
    desc: "Set clear expectations and payments with clients securely.",
    img: "/Freelancer_img.avif",
  },
  {
    title: "Sales Agreement",
    desc: "Document your sale/purchase deal with a professional template.",
    img: "/sales_agreement_img.jpg",
  },
];

const DraftDocument = () => {
  return (
    <div className="min-h-screen px-10 py-10  bg-gray-300">
      <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-6 place-items-center">
        {cardData.map((doc, index) => (
          <Card
            key={index}
            className="w-full max-w-[380px] p-4 bg-gray-200 mb-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer rounded-2xl"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{doc.title}</CardTitle>
              <CardDescription>{doc.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[180px] overflow-hidden rounded-xl">
                <img
                  src={doc.img}
                  alt={doc.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button
                   className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                    hover:from-indigo-600 hover:to-blue-600 
                    hover:scale-105 transition-transform duration-300 
                    cursor-pointer shadow-md"
                >
                Generate
                </Button>
            </CardFooter>

          </Card>
        ))}
      </div>
    </div>
  );
};

export default DraftDocument;
