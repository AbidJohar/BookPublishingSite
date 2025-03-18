/* eslint-disable no-unused-vars */
import React from 'react';
import Title from './Title';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { books } from '../assets/assets';

const MostReadBooks = () => {
  const [mostReadBooks, setMostReadBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = [...books].sort((a, b) => (b.readByUsers || 0) - (a.readByUsers || 0));
    setMostReadBooks(sortedBooks.slice(0, 6));
  }, []);

  return (
    <div className='my-10'>
      <div className='text-start pl-10 py-8 sm:text-3xl text-2xl'>
        <Title text1="MOST" text2="READ"/>
        <p className='text-gray-700 font-semibold text-lg'>
          Explore the books that have captured the hearts of our readers. These are the stories that have been most frequently read.
        </p>
      </div>

      <div className='w-full pl-10 flex flex-nowrap justify-start gap-6 mt-4 mb-3 overflow-x-auto pb-4'>
        {
          mostReadBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default MostReadBooks;