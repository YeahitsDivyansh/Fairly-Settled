import { useState, useEffect, useRef } from "react";

const images = [
  "https://img.freepik.com/premium-photo/ai-regulation-legal-concept_628331-319.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/sophisticated-image-robotic-hand-bespoke-suit-tie-perfectly-knotted_1039156-2559.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/lawyer-working-document-with-scales-justice_23-2151962523.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/collaborative-law-collaborative-practice-divorce-family-law-desk_1150-9090.jpg?ga=GA1.1.245847750.1745763404&semt=ais_hybrid&w=740",
  "/mid-img2.webp"
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
            className="w-full h-full object-cover inline-block opacity-80"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBackground;
