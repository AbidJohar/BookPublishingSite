/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import BookCard from "./BookCard";

const TopRatedBooks = () => {
  const [topRatedBooks, setTopRatedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchTopRatedBooks = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(`${base_url}/v1/books/getallbooks`, {
          withCredentials: true,
        });

        console.log("API Response:", response.data); // Debug: Log raw response

        if (response.data.success) {
          const books = response.data.books || response.data;
          const validBooks = books
            .filter((book) => book && book._id && book.title) // Keep your filter
            .sort((a, b) => {
              const aRating = a.ratings && a.ratings.length > 0 ? a.ratings[0].rating : 0;
              const bRating = b.ratings && b.ratings.length > 0 ? b.ratings[0].rating : 0;
              return bRating - aRating; // Highest rating first
            })
            .slice(0, 8);

          console.log("Valid Books after filtering/sorting:", validBooks); // Debug: Log final books

          setTopRatedBooks(validBooks);
        } else {
          setError(response.data.message || "Failed to fetch top-rated books");
          console.log("API Error Message:", response.data.message); // Debug: Log API error
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Failed to fetch top-rated books. Please try again.";
        setError(errorMessage);
        console.error("Error in TopRatedBooks:", err); // Debug: Log error details
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedBooks(); // Call the function
  }, [base_url]);

  return (
    <div className="mt-10">
      <div className="text-start pl-10 py-4 sm:text-3xl text-2xl">
        <Title text1="TOP" text2="RATED" />
        <p className="text-gray-800 font-semibold text-lg">
          Discover our highest rated books by our community. From timeless classics to new releases,
          find your next favorite read here.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="pl-10 text-lg text-gray-600">Loading top-rated books...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="pl-10 mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Books List */}
      {!loading && !error && (
        <div
          className="flex pl-10 flex-nowrap justify-start gap-5 mt-4 mb-3 overflow-x-auto pb-4"
          style={{
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
          }}
        >
          {topRatedBooks.length === 0 ? (
            <p className="text-lg text-gray-600">No top-rated books available.</p>
          ) : (
            topRatedBooks.map((book, index) => (
              <BookCard key={book._id || index} book={book} />
            ))
          )}
        </div>
      )}

       
      {/* <style jsx>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </div>
  );
};

export default TopRatedBooks;