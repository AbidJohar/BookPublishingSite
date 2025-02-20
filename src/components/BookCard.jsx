/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link 
      to={`/book-details/${book.title}`} 
      state={{ book }} 
      className="h-fit w-48 flex-shrink-0 flex flex-col justify-between" 
    >
      <div className="h-[18rem] w-full rounded-md overflow-hidden">  
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <p className="text-sm font-semibold mt-2">{book.title}</p>
      <p className="text-xs">Rating: {book.ratings[0]?.rating}</p>
      <p className="text-xs">Total readers: {book.readByUsers}</p>
    </Link>
  );
}