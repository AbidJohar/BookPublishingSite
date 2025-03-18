/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {books} from '../assets/assets.js';
import BookCard from "../components/BookCard";
import Title from "../components/Title.jsx";
const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
 

  useEffect(() => {
    // Simulating fetching search results
    const fetchResults = async () => {
       
      const filteredResults = books.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-5">
       <Title text1={"Search result for"} text2={query} />
      {results.length > 0 ? (
        <div className="grid mt-5 grid-cols-2 sm:grid-cols-6">
             {results.map((book, index)=> (
                <BookCard key={index} book={book} />
             ))}    

        </div>
      ) : (
        <p className="mt-4 text-red-500">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
