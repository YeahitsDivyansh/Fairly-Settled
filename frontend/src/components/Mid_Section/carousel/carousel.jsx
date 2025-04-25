import { useState, useEffect, useRef } from "react";

const images = [
  "/campus_img1.jpg",
  "/campus_img2.jpg",
  "/campus_img3.jpg",
  "/campus_img4.png",
  "/campus_img5.jpg",
  "/campus_img6.jpg",
  "/campus_img7.png",
  "/campus_img8.jpg",
];

// Add cloned first image at end for infinite loop trick
const extendedImages = [...images, images[0]];

const CarouselBackground = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Reset position without animation when it reaches the cloned slide
  useEffect(() => {
    if (current === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 600); // wait for transition to finish

      return () => clearTimeout(timeout);
    }
  }, [current]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        ref={sliderRef}
        className={`whitespace-nowrap h-full ${
          isTransitioning ? "transition-transform duration-700" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover inline-block opacity-60"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBackground;
