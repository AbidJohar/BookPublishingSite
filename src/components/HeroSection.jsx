/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/autoplay'; // Autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Autoplay module

const HeroSection = () => {
  useEffect(() => {
    // Swiper initialization is handled by the Swiper component itself
  }, []);

  const images = [assets.book4, assets.book1, assets.book2, assets.book3];

  return (
    <section className="relative h-[550px] w-full z-0">
      <Swiper
        modules={[Autoplay]} // Register Autoplay module
        spaceBetween={0}
        slidesPerView={1}
          // Optional: enables cross-fade for smoother transition
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true} // Enables continuous looping
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 flex justify-center  items-center">
              <img 
                src={image}
                alt={`Book slide ${index + 1}`}
                className="object-cover object-top w-full "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute bottom-10 left-7 sm:left-16 text-white z-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Our Book Publishing Platform</h1>
        <p className="text-base sm:text-lg">Discover, write, and publish your next masterpiece.</p>
      </div>
    </section>
  );
};

export default HeroSection;