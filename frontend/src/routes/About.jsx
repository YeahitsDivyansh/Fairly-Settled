"use client";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonial-demo";
import { CardSpotlightDemo } from "@/components/card-spotlight-demo";
import React, { useEffect, useRef, useState } from "react";

const About = () => {

  const [isVisible, setIsVisible] = useState(false);
  const meetRef = useRef(null);


 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const current = meetRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);



  return (
    <div className="bg-white relative overflow-hidden min-h-[80vh] px-4 py-10">
      {/* Introduction Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-white  p-8 my-6 transition-transform duration-300 ease-in-out ">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
            We're with you <br /> in every case
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Agility AI is revolutionizing the legal industry with a blend of
            cutting-edge technology and deep legal expertise. Our intelligent
            tools automate and simplify everything from document filing to case
            tracking — saving both time and money.
            <br />
            <br />
            Since our founding, we've empowered legal professionals and
            individuals alike to navigate complex legal matters with confidence,
            clarity, and efficiency.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-64 md:h-full object-cover rounded-lg shadow-lg hover:scale-95 hover:shadow-xl transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Core Features Section */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-inner mx-2 hover:z-10 transition-transform duration-300 ease-in-out hover:scale-95">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Collaborative Expertise
          </h3>
          <p className="text-gray-700">
            At Agility AI, we work as an extension of your legal team. Combining
            advanced AI tools with domain expertise, we help resolve legal
            complexities faster while maintaining complete transparency and
            control.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-inner mx-2 hover:z-10 transition-transform duration-300 ease-in-out hover:scale-95">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            AI-Powered Resolution
          </h3>
          <p className="text-gray-700">
            FairlySettled leverages intelligent automation and purposeful
            innovation to drive quicker, data-backed outcomes for legal
            disputes, saving both time and resources while ensuring fairness at
            every step.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-inner mx-2 hover:z-10 transition-transform duration-300 ease-in-out hover:scale-95">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Seamless Experience
          </h3>
          <p className="text-gray-700">
            Our user-first design ensures anyone can navigate the legal process
            — no jargon, no guesswork. Whether you're a law firm or an
            individual, our tools are intuitive, efficient, and ready to scale
            with your needs.
          </p>
        </div>
      </div>

      {/* Meet the Minds Section */}
      <div
        ref={meetRef}
        className={`rounded-xl max-w-5xl mx-auto px-4 py-8 transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="./AGILITYAI.png"
          alt="Agility AI Logo"
          className="mx-auto mb-6 h-20 object-contain rounded-full"
        />

        <h2 className="text-center text-6xl font-extrabold text-gray-900 mb-6">
          Meet the Minds Behind Agility AI
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          At <strong>Agility AI</strong>, we’re powered by a passionate and
          visionary team of engineers, legal professionals, and innovators who
          are united by a bold mission — to revolutionize the legal ecosystem in
          India. Our founding members come from India’s top institutions
          including <strong>IITs, IIIT, NSUT, NITs, DTU</strong>, and elite law
          schools such as the{" "}
          <strong>
            Campus Law Centre, Faculty of Law, University of Delhi
          </strong>
          .
          <br />
          <br />
          This unique blend of deep technical expertise and real-world legal
          experience allows us to design AI-driven tools that are not only
          state-of-the-art, but also highly attuned to the complexities of the
          Indian legal landscape. Our engineers focus on creating powerful,
          scalable systems, while our legal experts ensure these tools are
          meaningful, practical, and accessible.
          <br />
          <br />
          We are further guided by a distinguished Advisory Board composed of
          professors, domain veterans, and cross-disciplinary thought leaders in
          law, engineering, and management. Their wisdom helps us stay ahead of
          the curve — ethically grounded and future-ready.
          <br />
          <br />
          At Agility AI, this is more than just work — it’s a movement to create
          a smarter, faster, and more just legal future for all.
        </p>
      </div>

      {/* Advisory Board Section */}
      <div className="max-w-6xl w-full mx-auto px-4 py-10">
  <h2 className="text-6xl font-extrabold text-gray-900 text-center mb-10">
    Our Advisory Board
  </h2>
  {(() => {
    try {
      return <AnimatedTestimonialsDemo />;
    } catch (err) {
      console.error("Render error:", err);
      return <p className="text-red-600 text-center">Failed to load testimonials.</p>;
    }
  })()}
</div>


      {/* Our Core Values */}
      {/* <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-6xl font-extrabold text-center text-gray-900 mb-4">
          Our Core Values
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Our values are the foundation of everything we build, believe in, and
          strive to deliver — for our clients, our team, and society at large.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black text-white rounded-lg p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src="https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d994caf5a1624e9c88303b_noun-think-5247342%202.svg"
              alt="Innovation icon"
              className="w-20 h-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">Innovation-First</h3>
            <p className="text-sm">
              We challenge the status quo, leveraging AI to make legal services
              faster, fairer, and more accessible.
            </p>
          </div>
          <div className="bg-black text-white rounded-lg p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src="https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9962bcddbaa38d72afedd_noun-engineer-1204424%202.svg"
              alt="Integrity icon"
              className="w-20 h-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">Integrity Always</h3>
            <p className="text-sm">
              We act with unwavering ethics, transparency, and respect — always
              keeping justice and accountability at our core.
            </p>
          </div>
          <div className="bg-black text-white rounded-lg p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src="https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9a95e2aada0c14b379720_noun-handshake-680244%202%20(1).svg"
              alt="Empathy icon"
              className="w-20 h-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">Empathy-Led</h3>
            <p className="text-sm">
              We listen deeply, support inclusively, and design with empathy —
              because legal help should feel human.
            </p>
          </div>
          <div className="bg-black text-white rounded-lg p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src="https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9aa1d3abe65c79ad483a3_noun-trophy-6915046%202.svg"
              alt="Impact icon"
              className="w-20 h-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">Driven by Impact</h3>
            <p className="text-sm">
              Every line of code, every case handled — it’s all in service of
              building a more equitable and efficient legal future.
            </p>
          </div>
        </div>
      </div> */}

      <CardSpotlightDemo />

      {/* Diversity, Equity, and Inclusion Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-6xl font-extrabold text-gray-900 text-center mb-8">
          Diversity, Equity, and Inclusion
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          At Agility AI, we are dedicated to creating an inclusive environment
          where all voices are heard, respected, and empowered. Our commitment
          to diversity, equity, and inclusion drives our culture and innovation,
          enabling us to build products that reflect the diverse world we serve.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/** Principle 1 **/}
          <div className="bg-[#e0f7fa] p-6 rounded-xl shadow-lg w-60 text-center transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1716840646010-e5622fd6683d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRhbGVudCUyMHN0cmF0ZWd5JTIwJTI2JTIwdGFsZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Talent strategy & management"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#00796b] mb-2">
              Talent Strategy & Management
            </h3>
            <p className="text-sm text-gray-700">
              We prioritize diverse talent by fostering an environment where
              every individual can thrive and grow.
            </p>
          </div>

          {/** Principle 2 **/}
          <div className="bg-[#f1f8e9] p-6 rounded-xl shadow-lg w-60 text-center transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1695548303391-21a21138f642?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWR1Y2F0aW9uJTIwYW5kJTIwQXdhcmVuZXNzfGVufDB8fDB8fHww"
                alt="Education and awareness"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#33691e] mb-2">
              Education and Awareness
            </h3>
            <p className="text-sm text-gray-700">
              We foster an inclusive culture through continuous learning, making
              equity a priority at every level.
            </p>
          </div>

          {/** Principle 3 **/}
          <div className="bg-[#fff3e0] p-6 rounded-xl shadow-lg w-60 text-center transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social responsibility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#d84315] mb-2">
              Social Responsibility
            </h3>
            <p className="text-sm text-gray-700">
              We engage in initiatives that promote fairness, justice, and
              sustainable impact within our communities.
            </p>
          </div>

          {/** Principle 4 **/}
          <div className="bg-[#f3e5f5] p-6 rounded-xl shadow-lg w-60 text-center transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://media.istockphoto.com/id/1423702093/photo/assimilation-or-multiculturalism.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ju8ikWUWT-1OJxv0KtooMOC6hRXLoaCilbY1_sEFYS8="
                alt="Inclusive culture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#6a1b9a] mb-2">
              Inclusive Culture
            </h3>
            <p className="text-sm text-gray-700">
              We create an environment that celebrates diverse perspectives and
              ensures everyone feels valued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
