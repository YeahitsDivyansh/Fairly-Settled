import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Business Agreements",
    desc: "A legally binding contract between landlord and tenant. Generate it in seconds.",
    img: "/rent-agreement.jpeg",
    route: "/business-agreements",
  },
  {
    title: "Employment Agreements",
    desc: "A formal agreement between employer and employee outlining responsibilities.",
    img: "/employment_agreement_img.jpg",
    route: "/employment-agreements",
  },
  {
    title: "Real Estate Agreements",
    desc: "Protect your confidential info with an NDA in a few clicks.",
    img: "/NDA_img.jpg",
    route: "/real-estate-agreements",
  },
  {
    title: "Financial Agreements",
    desc: "Create an agreement to start your business partnership easily.",
    img: "/Partnership_deed_img.jpg",
    route: "/financial-agreements",
  },
  {
    title: "Intellectual Property Agreement",
    desc: "Set clear expectations and payments with clients securely.",
    img: "/Freelancer_img.avif",
    route: "/intellectual-property-agreements",
  },
  {
    title: "Personal Legal Agreements",
    desc: "Document your sale/purchase deal with a professional template.",
    img: "/sales_agreement_img.jpg",
    route: "/personal-legal-agreements",
  },
];

const DraftDocument = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-10 py-10 bg-[#9db6d9bd]">
      <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 place-items-center">
        {cardData.map((doc, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              rotateX: 5,
              rotateY: 3,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-full max-w-[360px]"
          >
            <Card className="relative bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300">
              {/* glowing gradient border */}
              <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-300 to-gray-500 opacity-30 blur-xl animate-pulse"></div>

              {/* Card content */}
              <div className="relative z-10 p-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {doc.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-800">
                    {doc.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-md perspective-[1000px]">
                    <motion.img
                      src={doc.img}
                      alt={doc.title}
                      className="w-full h-full object-cover rounded-xl"
                      whileHover={{
                        scale: 1.15,
                        rotateX: -5,
                        rotateY: 5,
                        z: 60,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </div>
                </CardContent>

                <CardFooter className="pt-4 flex justify-center">
                  <Button
                    className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg px-6 rounded-full transition-transform transform hover:scale-110  hover:shadow-xl"
                    onClick={() => navigate(doc.route)}
                  >
                    Generate
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DraftDocument;
