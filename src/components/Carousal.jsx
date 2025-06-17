import React, { useState, useEffect } from 'react';

const images = [
  'https://drive.google.com/thumbnail?id=190aPghgfG6SVyIAzX-11ib6owNqNnOyr&sz=w4000',
  'https://drive.google.com/thumbnail?id=1GX6DQodSl3jh_sCKCfKP4_PLyWMxX2ra&sz=w4000',
  'https://drive.google.com/thumbnail?id=1cgsJspBt356D0bIkJEciDQJ5MMRFnd9F&sz=w4000',
  'https://drive.google.com/thumbnail?id=190aPghgfG6SVyIAzX-11ib6owNqNnOyr&sz=w4000',
  'https://drive.google.com/thumbnail?id=1wVsmKN6YTEPGM8Rkf5nS2_l0cRkNews2&sz=w4000'
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 85}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="min-w-[85%] h-[80vh] object-cover rounded-lg mx-[2.5%]"
          />
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-1 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75 z-20"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-1 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75 z-20"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'} transition-all duration-400`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
