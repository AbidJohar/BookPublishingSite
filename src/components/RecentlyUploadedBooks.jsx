/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Title from './Title';
import BookCard from './BookCard';
import { books } from '../assets/assets.js';

const RecentlyUploadedBooks = () => {
  const [recentlyUploadedBooks, setRecentlyUploadedBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = [...books].slice(0,9);
       
      
    setRecentlyUploadedBooks(sortedBooks);
  }, []);

  return (
    <div className='my-10'>
      <div className='text-start pl-10 py-8 sm:text-3xl text-2xl'>
        <Title text1="RECENTLY" text2="UPLOADED"/>
        <p className='text-gray-800 font-semibold text-lg'>
          Check out the newest additions to our collection. Fresh stories waiting to be explored!
        </p>
      </div>

      <div className='flex pl-10 flex-nowrap justify-start gap-6 mt-4 mb-3 overflow-x-auto pb-4 hide-scrollbar'>
        {
          recentlyUploadedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default RecentlyUploadedBooks;