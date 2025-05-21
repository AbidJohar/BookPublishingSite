/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Title from '../components/Title.jsx';
import BookCard from '../components/BookCard.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExploreCategories = () => {
  // Define categories with images (adjusted to match your book categories)
  const categories = [
    { src: "https://th.bing.com/th/id/OIP.e3Mo8cQZRzkEKhdvpZAaeAHaEK?pid=ImgDet&w=474&h=266&rs=1", title: "Horror" },
    { src: "https://i.ytimg.com/vi/ozb_gKp-gUM/maxresdefault.jpg", title: "Fantasy" },  
    { src: "https://th.bing.com/th/id/R.a218a3ca6bc5268281a0cde81d79a258?rik=akT5WlWIQVYIIw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2fe%2f5%2f1222508-cool-adventure-wallpapers-1920x1303.jpg&ehk=2yEWdLUBXoVyjQkS5zQnh%2f1n%2bg0SBlbRi2rB4%2f0O3HU%3d&risl=&pid=ImgRaw&r=0", title: "Adventure" }, 
    { src: "https://th.bing.com/th/id/OIP.tE8qACZyjV4hQy4PD4YBygHaFb?rs=1&pid=ImgDetMain", title: "Historical" }, 
    { src: "https://th.bing.com/th/id/OIP.hTNDnAkEi-t4ZOvauN_1BgHaE5?cb=iwp2&rs=1&pid=ImgDetMain", title: "Thriller" },  
    { src: "https://wp.onethreeonefour.com/wp-content/uploads/2018/01/Couple-Shoot-30.jpg", title: "Romance" },  
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;



  useEffect(()=>{

  const fetchData = async () =>{
    
    try {
      setLoading(true);
      setError(null);

         const responce = await axios.get(`${base_url}/v1/books/getallbooks`, {
          withCredentials: true
         });

         if(responce.data.success){
              setBooks(responce.data.books);
         }
         else{
          setError(responce.data.message);
         }


      
    } catch (error) {
        setError(error?.message || 'something went wrong in Explore Categories');
    }
     finally{
      setLoading(false)
     }


  }


fetchData();

  },[base_url]);


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