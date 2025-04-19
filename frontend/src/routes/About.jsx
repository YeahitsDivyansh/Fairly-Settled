"use client";
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          x: index % 2 === 0 ? -100 : 100,
          y: 30,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 0.95,
          duration: 1.3,
          delay: index * 0.2,
          ease: "power4.out", // Cinematic ease
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#9db6d9bd] gap-10 flex flex-col justify-center items-center min-h-[80vh] px-4">
      {/* Heading */}
      <h1 className="mt-4 text-6xl text-[#1F2937] font-extrabold text-center">
        Your legal ally, powered by AI
      </h1>

      {/* Introduction Card */}
      <Card
        ref={(el) => (cardRefs.current[0] = el)}
        className="mt-6 relative max-w-3xl w-full shadow-xl p-6 bg-white overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      >
        <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-600 to-gray-700 opacity-30 blur-xl animate-pulse"></div>

        <CardContent className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Agility AI</strong>, we're changing the game in the legal
            world by slashing both time and costs, making justice faster and
            more affordable. Our AI-driven automation handles everything from
            case filing and document generation to real-time tracking,
            eliminating the delays and inefficiencies that have long held back
            the legal process.
            <br />
            <br />
            What truly sets us apart is our{" "}
            <strong>pay-for-performance model</strong> — you only pay a small
            percentage of the legal fees, ensuring justice is within reach for
            all. This first-of-its-kind approach in the country means both legal
            professionals and consumers can enjoy a streamlined experience,
            achieving faster results without the heavy costs.
            <br />
            <br />
            <em>Justice, simplified and made affordable.</em>
          </p>
        </CardContent>
      </Card>

      {/* Meet the Minds Behind Card */}
      <Card
        ref={(el) => (cardRefs.current[1] = el)}
        className="relative max-w-3xl w-full shadow-xl p-6 bg-white overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      >
        <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-600 to-gray-700 opacity-30 blur-xl animate-pulse"></div>
        <CardContent className="relative z-10">
          <h2 className="text-center text-2xl font-bold mb-4 text-blue-900">
            Meet the Minds Behind Agility AI
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Agility AI</strong>, we’re driven by a dynamic team of
            innovators, engineers, and legal professionals dedicated to
            reshaping the legal ecosystem in India. Our core team hails from
            some of the country’s most prestigious institutions — including{" "}
            <strong>IITs, IIIT, NSUT, NITs, DTU</strong>, and top law schools
            like{" "}
            <strong>
              Campus Law Centre, Faculty of Law, University of Delhi
            </strong>
            .
            <br />
            <br />
            This powerful fusion of technological excellence and legal expertise
            enables us to build AI-driven solutions that are not only
            cutting-edge but also grounded in real-world legal practice. Our
            engineers bring deep technical skill, while our legal experts ensure
            every tool we create serves the needs of both professionals and
            individuals with precision and empathy.
            <br />
            <br />
            Backing us is a distinguished Advisory Board comprising professors,
            industry veterans, and thought leaders from the fields of law,
            engineering, and management. Their insights help us stay
            future-ready, ethically grounded, and relentlessly innovative.
            <br />
            <br />
            At Agility AI, we’re more than just a team — we’re a mission in
            motion, building a smarter, faster, and fairer legal future for all.
          </p>
        </CardContent>
      </Card>

      {/* Advisory Board Card */}
      <Card
        ref={(el) => (cardRefs.current[2] = el)}
        className="mb-6 relative max-w-3xl w-full shadow-xl p-6 bg-white overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      >
        <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white-500 via-black-600 to-gray-700 opacity-30 blur-xl animate-pulse"></div>
        <CardContent className="relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">
            Our Advisory Board
          </h2>
          <div className="flex items-start gap-8">
            <img
              src="./aashish-argade.jpeg"
              alt="Prof. Aashish Argade"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
            <p className="text-gray-600 leading-relaxed">
              <strong>Prof. Aashish Argade</strong> is a <strong>PhD</strong>{" "}
              from <strong>IIM Ahmedabad</strong> and an{" "}
              <strong>ex-Deputy Dean</strong> at <strong>IRMA</strong> (an
              Institute of National Importance declared by the Parliament of
              India). He has been actively involved as a consultant with various
              government departments for over a decade.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
