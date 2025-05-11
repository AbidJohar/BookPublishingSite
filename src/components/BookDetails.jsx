/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  console.log("book data in detail :",book);
  

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Trigger on route change

  if (!book) {
    navigate("/");
    return null;
  }

  return (
    <div className="w-full">
      {/* Above Container */}
      <div className="bg-[#e4e76c] pt-6 px-4 sm:px-12 flex items-center justify-center">
        <div className="bg-white flex flex-col md:flex-row rounded-t-lg px-4 sm:px-8 md:px-16 py-6 sm:py-8 w-full max-w-5xl">
          {/* Image Container */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-72 mb-6 md:mb-0">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-48 sm:w-52 md:w-60 rounded-md object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="flex-1 md:ml-5 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333333] pb-2">
              {book.title} <span className="text-[#008080]">|| Trending</span>
            </h2>
            <div className="w-full h-20 sm:h-24 overflow-hidden">
              <p className="text-sm sm:text-base text-[#333333] tracking-tight">
                {book.description ||
                  "Billionaire Arav Malhotra, never planning marriage, wedded the daughter of his father's business partner against his will."}
              </p>
            </div>
            
         
            <div className="flex justify-center md:justify-start items-center mt-2">
              <span className="mr-2 font-bold text-[#333333]">Read Count:</span>
              <span className="text-[#333333]">{book.readByUsers}</span>
            </div>
            <div className="flex justify-center md:justify-start items-center mt-2 gap-5">
              <span className=' flex items-center gap-2 q'>
                <FaThumbsUp/>
                {0}
              </span>
              <span className='flex items-center gap-2 '>
                <FaThumbsDown/>
                {0}
              </span>
            </div>
            <button className="mt-4 bg-teal-700 hover:bg-teal-800 text-white py-2 px-8 sm:py-3 sm:px-14 rounded font-extrabold transition duration-200">
              Read Now
            </button>
          </div>
        </div>
      </div>

      {/* Lower Container */}
      <div className="w-full bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-52 py-4 mt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16 overflow-hidden bg-gray-300 mr-4">
              <img
                src="https://www.thefashionisto.com/wp-content/uploads/2017/05/Mango-Man-Slim-Fit-Linen-Cotton-Blend-Blazer-450x629.jpg"
                className="w-full h-full object-cover"
                alt="User"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-[#333333] font-sans">Alexander</h1>
              <p className="text-xs sm:text-sm text-[#333333]">Followers: 1.3k</p>
            </div>
          </div>
          <button className="text-lg sm:text-xl font-semibold text-[#008080] hover:text-[#006666] font-sans">
            Follow
          </button>
        </div>

        {/* Episodes Section */}
        <div className="flex items-center justify-start mt-6 sm:mt-8 px-4 sm:px-10">
          <div className="h-6 sm:h-8 w-1.5 sm:w-2 bg-[#FFD700]"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#333333] ml-2">Episodes</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-10 mt-8 pb-8">
          {["Episode 1", "Episode 2", "Episode 3", "Episode 4", "Episode 5"].map((episode, index) => (
            <div
              key={index}
              className="h-fit w-full max-w-[300px] mx-auto px-4 py-3 shadow-md border border-[#F0F0F0] rounded-lg hover:border-[#008080] transition duration-200"
            >
              <h2 className="font-semibold text-base sm:text-lg text-[#333333]">{episode}</h2>
              <div className="flex flex-wrap items-center mt-2 gap-3 sm:gap-4 text-[#333333]">
                <div className="flex items-center">
                  <i className="ri-eye-fill text-[#008080] text-base sm:text-lg mr-1"></i>
                  <span className="text-xs sm:text-sm">Views</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#FFD700] text-base sm:text-lg mr-1"></i>
                  <span className="text-xs sm:text-sm">Rate</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-fill text-[#008080] text-base sm:text-lg mr-1"></i>
                  <span className="text-xs sm:text-sm">Time</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;