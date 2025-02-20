/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Title = ({ text1, text2, className = "" }) => {
  return (
    <div className={`w-full flex items-center ${className} gap-1  whitespace-nowrap`}>
      <p className="text-[#333333] prata-regular text-2xl font-bold">
        {text1}
        <span className="text-[#008080] prata-regular text-2xl font-bold"> {text2}</span>
      </p>
      <svg
        width="110" // Increased width from 60 to 120
        height="20"
        viewBox="0 0 140 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
      >
        <path
          d="M0 10 C20 2, 40 18, 60 10 C80 2, 100 18, 120 10" // Single path with 3 curves
          stroke="#FFD700"
          strokeWidth="5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Title;