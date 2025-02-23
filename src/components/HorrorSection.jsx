/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Title from './Title';
import BookCard from './BookCard';
import { books } from '../assets/assets';

const HorrorSection = () => {
  const [horrorBooks, setHorrorBooks] = useState([]);

  useEffect(() => {
    // Filter books by horror category and take the first 6
    const copyBooks = [...books]
    const horrorBooks =  copyBooks.filter(book => book.category === 'horror') 
      horrorBooks.slice(0, 6); 
      
    setHorrorBooks(horrorBooks);
  }, []);

  return (
    <div className='my-10'>
      <div className='text-start pl-10 py-8 sm:text-3xl text-2xl'>
        <Title text1="HORROR" text2="COLLECTIONS"/>
        <p className='text-gray-800 font-semibold text-lg'>
          Dive into spine-chilling tales and eerie adventures from our horror collection!
        </p>
      </div>

      <div className='flex pl-10 flex-nowrap justify-start gap-6 mt-4 mb-3 overflow-x-auto pb-4 hide-scrollbar'>
        {
          horrorBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default HorrorSection;