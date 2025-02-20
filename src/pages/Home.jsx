/* eslint-disable no-unused-vars */
import React from "react";
import TopRatedBooks from "../components/TopRated";
import HeroSection from "../components/HeroSection";
import MostReadBooks from "../components/MostReadBooks";
import RecentlyUploadedBooks from "../components/RecentlyUploadedBooks";

const Home = () => {
  return (
    <div >
      <HeroSection />
      <RecentlyUploadedBooks />
      <TopRatedBooks />
      <MostReadBooks />
    </div>
  );
};

export default Home;

{
  /* <>
      <div className="main h-fit w-auto flex flex-col items-start ">
        <h1 className="pt-5 font-semibold text-3xl">Read English Stories</h1>
        <h2 className="font-semibold opacity-40 text-xl">A World Of Stories</h2>
         
        <h1 className="text-2xl font-semibold mt-3">Top Trending Series</h1>
        <div className="RowDiv flex flex-row overflow-scroll overflow-y-hidden gap-6 scrollbar">
          {trendingBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

         
        <h1 className="text-2xl font-semibold mt-5">Top Recently Updated Series</h1>
        <div className="RowDiv flex flex-row gap-6">
          {updatedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

         
        <h1 className="text-2xl font-semibold mt-5">Horror Series</h1>
        <div className="RowDiv flex flex-row gap-6">
          {horrorBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
 
    </> */
}

// const trendingBooks = [
//   {
//     image: "https://th.bing.com/th/id/OIP.3kdn7cAoRYdAI14Oj6vXlwAAAA?pid=ImgDet&w=204&h=307&c=7&dpr=1.7",
//     title: "Learn to love",
//     readTime: "12 hours",
//     totalReaders: "52k+ Total readers",
//   },
//   {
//     image: "https://th.bing.com/th/id/OIP.4fZvK8IfIRSr_aHUa_tSiAAAAA?rs=1&pid=ImgDetMain",
//     title: "The Dark Forest",
//     readTime: "15 hours",
//     totalReaders: "70k+ Total readers",
//   },
//   {
//     image: "https://th.bing.com/th/id/OIP.RmhPv6SDi6IjGQ2bWQlmvAHaLx?rs=1&pid=ImgDetMain",
//     title: "The Dark Forest",
//     readTime: "15 hours",
//     totalReaders: "70k+ Total readers",
//   },
//   {
//     image: "https://th.bing.com/th/id/OIP.RmhPv6SDi6IjGQ2bWQlmvAHaLx?rs=1&pid=ImgDetMain",
//     title: "The Haunting Night",
//     readTime: "10 hours",
//     totalReaders: "48k+ Total readers",
//   },

// ];

// const updatedBooks = [
//   {
//     image: "https://th.bing.com/th/id/OIP.4fZvK8IfIRSr_aHUa_tSiAAAAA?rs=1&pid=ImgDetMain",
//     title: "Rise of Empires",
//     readTime: "14 hours",
//     totalReaders: "65k+ Total readers",
//   },

// ];

// const horrorBooks = [
//   {
//     image: "https://th.bing.com/th/id/OIP.RmhPv6SDi6IjGQ2bWQlmvAHaLx?rs=1&pid=ImgDetMain",
//     title: "The Haunting Night",
//     readTime: "10 hours",
//     totalReaders: "48k+ Total readers",
//   },

// ];
