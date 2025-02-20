/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white py-10 mt-20 border-t border-[#F0F0F0]/20">
      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:grid grid-cols-[2fr_1fr_1fr] gap-8">
        
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} alt="Haroof Logo" className="w-40 mb-4" />
          <p className="text-sm text-[#F0F0F0]/80 max-w-md">
            Haroof is your gateway to literary excellence. We celebrate the art of storytelling by publishing captivating books that inspire, 
            entertain, and enlighten readers worldwide. Join us in turning pages and weaving tales that last a lifetime.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold text-[#FFD700] mb-4">Company</p>
          <ul className="space-y-2">
            <li className="text-[#F0F0F0]/80 hover:text-[#008080] cursor-pointer transition-colors duration-200">Home</li>
            <li className="text-[#F0F0F0]/80 hover:text-[#008080] cursor-pointer transition-colors duration-200">About</li>
            <li className="text-[#F0F0F0]/80 hover:text-[#008080] cursor-pointer transition-colors duration-200">Books</li>
            <li className="text-[#F0F0F0]/80 hover:text-[#008080] cursor-pointer transition-colors duration-200">Privacy Policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="text-lg font-semibold text-[#FFD700] mb-4">GET IN TOUCH</h1>
          <p className="text-sm text-[#F0F0F0]/80">Contact: +1-800-HAROOF</p>
          <p className="text-sm text-[#F0F0F0]/80">support@haroof.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#F0F0F0]/80 hover:text-[#FF6F61]"><i className="ri-facebook-fill text-lg"></i></a>
            <a href="#" className="text-[#F0F0F0]/80 hover:text-[#FF6F61]"><i className="ri-twitter-fill text-lg"></i></a>
            <a href="#" className="text-[#F0F0F0]/80 hover:text-[#FF6F61]"><i className="ri-instagram-fill text-lg"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-[#F0F0F0]/60 py-6 border-t border-[#F0F0F0]/10 mt-8">
        <p>© {new Date().getFullYear()} Haroof Publishing. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;