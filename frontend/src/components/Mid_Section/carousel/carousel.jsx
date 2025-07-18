import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./carousel.css";

const images = ["/Website Carousal.png", "/UpdatedAdvBoard.png", "/2.png"];

const CarouselBackground = () => {
  const [current, setCurrent] = useState(0);
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
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleManualNext = () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  };

  const handleManualPrev = () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  };

  return (
    <div className="carousel-inner bg-green">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/1920x1080?text=Image+Not+Found";
            }}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={handleManualPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md p-2 sm:p-1 rounded-full hover:scale-110 transition z-20"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} className="text-black" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleManualNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md p-2 sm:p-1 rounded-full hover:scale-110 transition z-20"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CarouselBackground;
