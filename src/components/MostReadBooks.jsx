/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import BookCard from "./BookCard";

const MostReadBooks = () => {
  const [mostReadBooks, setMostReadBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchMostReadBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${base_url}/v1/books/getallbooks`, {
          withCredentials: true,
        });

        if (response.data.success) {
          const books = response.data.books || response.data;
           
          // Validate, normalize, and sort by readByUsers (highest first), take first 6
          const validBooks = books
            .filter((book) => book && book._id && book.title) // Ensure required fields
            .map((book) => ({
              ...book,
              ratings: book.ratings || [], // Ensure ratings is an array
              readByUsers: book.readByUsers || 0, // Ensure readByUsers is a number
            }))
            .sort((a, b) => (b.readByUsers || 0) - (a.readByUsers || 0))
            .slice(0, 6);
          setMostReadBooks(validBooks);
        } else {
          setError(response.data.message || "Failed to fetch most-read books");
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Failed to fetch most-read books. Please try again.";
        setError(errorMessage);
        if (err.response?.status === 401) {
          // Optionally redirect to login
          // window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMostReadBooks();
  }, [base_url]);

  return (
    <div className="my-10">
      <div className="text-start pl-10 py-8 sm:text-3xl text-2xl">
        <Title text1="MOST" text2="READ" />
        <p className="text-gray-700 font-semibold text-lg">
          Explore the books that have captured the hearts of our readers. These are the stories that
          have been most frequently read.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="pl-10 text-lg text-gray-600">Loading most-read books...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="pl-10 mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Books List */}
      {!loading && !error && (
        <div className="w-full pl-10 flex flex-nowrap justify-start gap-6 mt-4 mb-3 overflow-x-auto pb-4">
          {mostReadBooks.length === 0 ? (
            <p className="text-lg text-gray-600">No most-read books available.</p>
          ) : (
            mostReadBooks.map((book, index) => (
              <BookCard key={book.id || index} book={book} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MostReadBooks;