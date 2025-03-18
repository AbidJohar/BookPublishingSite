/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { books } from "../assets/assets.js"; 

const MyReadings = () => {
  const [readings, setReadings] = useState([]);

  console.log("books",books);
  useEffect(() => {
          
    const userReadings = books.slice(0,5)
  
    setReadings(userReadings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Readings</h1>

        {readings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">You haven’t started any books yet.</p>
            <p className="text-sm text-gray-400 mt-2">
              Explore our library to find your next read!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {readings.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={book.coverImage || 'https://via.placeholder.com/100x150'} // Fallback if coverImage is undefined
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  
                  <div className="mt-4 flex justify-between">
                    <button className="text-[#008080] hover:text-[#008070] text-sm font-medium">
                      Continue Reading
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReadings;