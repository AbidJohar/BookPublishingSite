/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard.jsx";
import Title from "../components/Title.jsx";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  console.log("query:",query);
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${base_url}/v1/books/getallbooks`, {
          withCredentials: true,
        });

        if (response.data.success) {
          const allBooks = response.data.books;
          console.log("all books",allBooks);
          
          const filtered = allBooks.filter((book) => {
  console.log("Comparing:", book.title.toLowerCase(), "with query:", query.toLowerCase());
  return book.title.toLowerCase().includes(query.toLowerCase());
});
          console.log("filtered book",filtered);
          
          setResults(filtered);
        } else {
          setError("Failed to fetch books.");
        }
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    if (query.trim()) {
      fetchResults();
    }
  }, [query, base_url]);

  return (
    <div className="min-h-screen p-5">
      <Title text1={"Search result for"} text2={`"${query}"`} />
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          {results.length > 0 ? (
            <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3">
              {results.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-600">No results found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
