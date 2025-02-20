/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import Title from './Title';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { books } from '../assets/assets';

const TopRatedBooks = () => {
  const [topRatedBooks, setTopRatedBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = [...books].sort((a, b) => (b.ratings || 0) - (a.ratings || 0));
    setTopRatedBooks(sortedBooks.slice(0, 8));
  }, []);

  return (
    <div className='mt-10'>
      <div className='text-start pl-10 py-4 sm:text-3xl text-2xl'>
        <Title text1="TOP" text2="RATED"/>
        <p className='text-gray-800 font-semibold text-lg'>
          Discover our highest rated books by our community. From timeless classics to new releases, find your next favorite read here.
        </p>
      </div>

      <div 
        className='flex pl-10 flex-nowrap justify-start gap-5 mt-4 mb-3 overflow-x-auto pb-4'
        style={{
          msOverflowStyle: 'none', // IE and Edge
          scrollbarWidth: 'none', // Firefox
        }}
      >
        {
          topRatedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        }
      </div>

      {/* Inline style for Webkit browsers */}
      <style jsx>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TopRatedBooks;