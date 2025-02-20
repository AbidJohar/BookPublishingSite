/* eslint-disable no-unused-vars */
import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 sm:p-8 md:p-12 bg-[#F0F0F0] min-h-screen">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-center mt-12">
        <div className="relative group">
          <img 
            src={assets.book4} 
            alt="Haroof Publishing" 
            className="w-full max-w-[300px] sm:max-w-[800px] h-auto object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-[#008080] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Right side: Title and Description */}
      <div className="w-full md:w-1/2 p-4 md:pl-8 flex flex-col justify-center">
        <div className="text-2xl sm:text-3xl animate-fade-in">
          <Title text1={"ABOUT"} text2={"HAROOF"} className="mb-6" />
        </div>
        
        <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed font-serif italic animate-slide-up">
          Welcome to Haroof, where stories find their wings. We are a passionate book publishing platform dedicated to nurturing creativity, 
          amplifying voices, and bringing literary masterpieces to life. From timeless classics to bold new narratives, our curated collection 
          celebrates the art of storytelling with elegance and soul.
        </p>

        {/* Our Mission Section */}
        <div className="mt-8 animate-slide-up delay-200">
          <h2 className="font-semibold text-lg sm:text-xl text-[#008080] flex items-center">
            <span className="w-8 h-0.5 bg-[#FFD700] mr-2"></span>
            Our Mission
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#333333] leading-relaxed font-serif">
            At Haroof, our mission is to empower authors and enchant readers. We strive to publish works that inspire, provoke thought, and 
            transcend boundaries—all while embracing sustainable practices. With every page turned, we aim to weave a legacy of literary 
            excellence that’s as enduring as the tales we tell.
          </p>
        </div>

        {/* Fancy Accent */}
        <div className="mt-6 flex justify-start">
          <button className="bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-[#FFD700] hover:text-[#333333] transition-all duration-300 transform hover:scale-105 shadow-md">
            Discover Our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;