/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { books } from '../assets/assets.js'; // Assuming this is where your books data is
import Title from '../components/Title.jsx';
import BookCard from '../components/BookCard.jsx';
import { useNavigate } from 'react-router-dom';

const ExploreCategories = () => {
  // Define categories with images (adjusted to match your book categories)
  const categories = [
    { src: "https://th.bing.com/th/id/OIP.e3Mo8cQZRzkEKhdvpZAaeAHaEK?pid=ImgDet&w=474&h=266&rs=1", title: "Horror" },
    { src: "https://i.ytimg.com/vi/ozb_gKp-gUM/maxresdefault.jpg", title: "Fantasy" }, // Children's Stories could be Fantasy
    { src: "https://th.bing.com/th/id/OIP.0ukxyOyM8a5ED1qiUa2rZwHaFi?rs=1&pid=ImgDetMain", title: "Adventure" }, // Comedy replaced with Adventure
    { src: "https://th.bing.com/th/id/OIP.tE8qACZyjV4hQy4PD4YBygHaFb?rs=1&pid=ImgDetMain", title: "Historical" }, // Documentary replaced with Historical
    { src: "https://th.bing.com/th/id/OIP.JXm9QYiqDU_T-DRgiD-FbQHaFj?rs=1&pid=ImgDetMain", title: "Sci-fi" }, // Life replaced with Sci-fi
    { src: "https://th.bing.com/th/id/OIP.9mz2B2yGZkDqBOjfGKKu1AHaFE?rs=1&pid=ImgDetMain", title: "Mystery" }, // Islamic Stories replaced with Mystery
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


   // handle search click
   const handleSubmit = (e)=>{
    e.preventDefault();
      if(query.trim()){
        navigate(`/search?q=${query}`)
      }
         
   }

  // Handle category click
  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    // Filter books based on category (case-insensitive)
    const filtered = books.filter(
      (book) => book.category.toLowerCase() === categoryTitle.toLowerCase()
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="mainDiv min-h-screen w-full pb-4">
       
      <form onSubmit={handleSubmit} className='flex items-center justify-center py-3'>
        <input value={query} onChange={(e)=> setQuery(e.target.value)} className='w-1/2 py-3 pl-5 p rounded-l-full border-[1px] border-gray-500' type="text" placeholder='🔍 search here' />
        <button type='submit' className=' rounded-r-full py-3 px-4 text-md text-white border-[1px] border-black bg-[#008080]'>search</button>
      </form>
    
      <h1 className="text-2xl font-extrabold pl-6 sm:pl-14 mt-3">Explore Categories</h1>

  
      {/* Categories Section */}
      <div className="mainDivCategory w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-6 sm:px-14 pt-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="catebox relative w-full max-w-[14rem] h-36 bg-black rounded-md overflow-hidden group cursor-pointer"
            onClick={() => handleCategoryClick(category.title)}
          >
            <img
              src={category.src}
              alt={category.title}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
              <h1 className="text-white text-lg font-bold tracking-tight">
                {category.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* Books Display Section */}
      {selectedCategory && (
        <div className="booksSection px-6 sm:px-14 pt-5">
          {/* <h2 className="text-2xl font-bold mb-4">
            {selectedCategory} Books
          </h2> */}
          <Title text1={selectedCategory} text2={'books'} />
          {filteredBooks.length > 0 ? (
            <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3">
              {filteredBooks.map((book,index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No books available for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExploreCategories;