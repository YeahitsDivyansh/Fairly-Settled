import { AnimatedTestimonials } from "@/animations/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Former IAS. Former MD & CEO at NCDEX. Chairman of the Board at National Commodity Clearing Limited.",
      name: "Sri R Ramaseshan",
      designation: "",
      src: "./R_Ramaseshan_sir.jpg",
    },
    {
      quote:
        "Assistant Professor at IRMA. Consultant to various government departments for over a decade.",
      name: "Prof. Aashish Argade",
      designation: "PhD from IIM Ahmedabad",
      src: "./aashish-argade.jpeg",
    },
    {
      quote:
        "Professor at IIT Roorkee. PhD from IIM Ahmedabad. BTech from IIT Bombay.",
      name: "Prof. Sumit Kumar Yadav",
      designation: "",
      src: "./Sumit Kumar Yadav.jpeg",
    },
    {
      quote:
        "Vice- Chancellor, NUSRL, Ranchi. Chair Professor, Chair of Consumer Law and Practice, NLSIU.",
      name: "Prof. (Dr.) Ashok R. Patil",
      designation: "",
      src: "./Prof_Ashok_R_Patil.jpg",
    },
    {
      quote:
        "Chief Information Security Officer at Nykaa. Cyber Security Transformation Evangelist at Indian Navy. Former Group CISO at Zee Entertainment Enterprises Ltd.",
      name: "Cdr Praveen Kumar",
      designation: "",
      src: "./Cdr_Praveen_kumar.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials}  />;
}
