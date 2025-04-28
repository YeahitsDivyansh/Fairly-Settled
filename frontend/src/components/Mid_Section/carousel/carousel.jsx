import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://img.freepik.com/premium-photo/ai-regulation-legal-concept_628331-319.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/sophisticated-image-robotic-hand-bespoke-suit-tie-perfectly-knotted_1039156-2559.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/lawyer-working-document-with-scales-justice_23-2151962523.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/collaborative-law-collaborative-practice-divorce-family-law-desk_1150-9090.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "/mid-img2.webp"
];

const extendedImages = [images[images.length - 1], ...images, images[0]];

const CarouselBackground = () => {
  const [current, setCurrent] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= images.length + 1 ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? images.length : prev - 1));
  };

  const handleTransitionEnd = () => {
    if (current === 0) {
      setTransitioning(false);
      setCurrent(images.length);
      setTimeout(() => setTransitioning(true), 20);
    } else if (current === images.length + 1) {
      setTransitioning(false);
      setCurrent(1);
      setTimeout(() => setTransitioning(true), 20);
    }
  };

  const handleManualPrev = () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  };

  const handleManualNext = () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      <div
        className={`whitespace-nowrap h-full ${transitioning ? "transition-transform duration-700" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((img, index) => (
          <div key={index} className="relative inline-block w-full h-full">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full cursor-pointer hover:scale-110 transition z-20"
        onClick={handleManualPrev}
      >
        <FaChevronLeft size={24} className="text-black" />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full cursor-pointer hover:scale-110 transition z-20"
        onClick={handleManualNext}
      >
        <FaChevronRight size={24} className="text-black" />
      </div>
    </div>
  );
};

export default CarouselBackground;
