/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Set initial images using useEffect
  useEffect(() => {
    setImages([assets.book4,assets.book1, assets.book2, assets.book3]);
  }, []); // Empty dependency array means this runs once on mount

  // Slideshow effect
  useEffect(() => {
    // Only start interval if images array is not empty
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      // Cleanup interval on unmount or when images change
      return () => clearInterval(interval);
    }
  }, [images]); // Depend on images array

  return (
    <section className="relative h-[550px] w-full z-0">
      <div className="absolute inset-0 flex justify-center pt-10 items-center">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Book slide ${index + 1}`}
            className={`absolute object-cover w-[90%] h-full rounded-lg transition-opacity duration-2000 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-10 left-10 sm:left-24 text-white z-10">
      <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Our Book Publishing Platform</h1>
      <p className="text-base sm:text-lg">Discover, write, and publish your next masterpiece.</p>
      </div>
    </section>
  );
};

export default HeroSection;