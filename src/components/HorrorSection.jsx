/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import BookCard from "./BookCard";

const HorrorSection = () => {
  const [horrorBooks, setHorrorBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchHorrorBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${base_url}/v1/books/getallbooks`, {
          withCredentials: true,
        });

        if (response.data.success) {
          const books = response.data.books || response.data;
          // Filter books by horror category and take the first 6
          const horrorBooks = books
            .filter((book) => book.status === "approved" && book.category.toLowerCase() === "horror")

          setHorrorBooks(horrorBooks);
        } else {
          setError(response.data.message || "Failed to fetch horror books");
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Failed to fetch horror books. Please try again.";
        setError(errorMessage);
        if (err.response?.status === 401) {
          // Optionally redirect to login
          // window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHorrorBooks();
  }, [base_url]);

  return (
    <div className="my-10">
      <div className="text-start pl-10 py-8 sm:text-3xl text-2xl">
        <Title text1="HORROR" text2="COLLECTIONS" />
        <p className="text-gray-800 font-semibold text-lg">
          Dive into spine-chilling tales and eerie adventures from our horror collection!
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="pl-10 text-lg text-gray-600">Loading horror books...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="pl-10 mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Books List */}
      {!loading && !error && (
        <div className="flex pl-10 flex-nowrap justify-start gap-6 mt-4 mb-3 overflow-x-auto pb-4 hide-scrollbar">
          {horrorBooks.length === 0 ? (
            <p className="text-lg text-gray-600">No horror books available.</p>
          ) : (
            horrorBooks.map((book, index) => (
              <BookCard key={book.id || index} book={book} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HorrorSection;