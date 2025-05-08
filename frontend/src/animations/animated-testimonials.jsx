import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";


export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const promises = testimonials.map((t) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = t.src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(promises).then(() => setImagesLoaded(true));
  }, [testimonials]);

  useEffect(() => {
    if (autoplay && imagesLoaded) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, imagesLoaded]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-600 text-lg animate-pulse">
        Loading testimonials...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left: Images with 3D stacking */}
        <div className="relative h-80 w-full flex items-center justify-center perspective-1000">
          {/* Previous card (left tilted) */}
          <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.02} transitionSpeed={2500}>
          <motion.div
            key={"prev" + active}
            initial={{ opacity: 0, scale: 0.9, x: -100, rotateZ: -15, rotateY: 25 }}
            animate={{ opacity: 0.5, scale: 0.9, x: -100, rotateZ: -15, rotateY: 25 }}
            transition={{ duration: 0.5 }}
            className="absolute rounded-[2rem] z-0 shadow-2xl shadow-black/90 drop-shadow-2xl"
          >
            <img
              src={testimonials[(active - 1 + testimonials.length) % testimonials.length].src}
              alt=""
              className="h-72 w-72 object-cover rounded-[2rem]"
            />
          </motion.div>

          {/* Next card (right tilted) */}
          <motion.div
            key={"next" + active}
            initial={{ opacity: 0, scale: 0.9, x: 100, rotateZ: 15, rotateY: -25 }}
            animate={{ opacity: 0.5, scale: 0.9, x: 100, rotateZ: 15, rotateY: -25 }}
            transition={{ duration: 0.5 }}
            className="absolute rounded-[2rem] z-0 shadow-2xl shadow-black/90 drop-shadow-2xl"
          >
            <img
              src={testimonials[(active + 1) % testimonials.length].src}
              alt=""
              className="h-72 w-72 object-cover rounded-[2rem]"
            />
          </motion.div>

          {/* Active card (front) */}
          
          <motion.div
            key={testimonials[active].src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[2rem] z-20 shadow-2xl shadow-black/90 drop-shadow-2xl"
          >
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="h-80 w-80 object-cover rounded-[2rem]"
            />
          </motion.div>
          </Tilt>
        </div>


        {/* Right: Text */}
        <div className="flex flex-col justify-between py-4">
          <div>
            <h3 className="text-2xl font-bold text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[active].designation}
            </p>
            <motion.p
              className="mt-8 text-lg text-gray-600"
              key={testimonials[active].quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {testimonials[active].quote}
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-125 transition-transform"
            >
              <IconArrowLeft className="h-6 w-6 text-black group-hover/button:rotate-12 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-125 transition-transform"
            >
              <IconArrowRight className="h-6 w-6 text-black group-hover/button:-rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
