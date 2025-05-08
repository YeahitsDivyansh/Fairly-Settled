import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="mx-auto max-w-4xl px-4 py-20 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left: Image */}
        <div className="relative h-80 w-full">
          <motion.div
            key={testimonials[active].src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="h-full w-full rounded-3xl object-cover"
            />
          </motion.div>
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
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-white"
            >
              <IconArrowLeft className="h-10 w-10 text-black group-hover/button:rotate-12 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-white"
            >
              <IconArrowRight className="h-10 w-10 text-black group-hover/button:-rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
