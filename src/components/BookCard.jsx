/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BookCard({ book }) {

    const { title, coverImage, ratings, readByUsers } = book;

 // Safely access rating
  const rating = ratings && Array.isArray(ratings) && ratings.length > 0 ? ratings[0].rating : "N/A";

  return (
    <Link 
      to={`/book-details/${title}`} 
      state={{ book }} 
      className="h-fit w-[10rem] flex-shrink-0 flex flex-col justify-between" 
    >
      <div className="h-[15rem] w-full rounded-md overflow-hidden">  
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <p className="text-sm font-semibold mt-2">{title}</p>
      <p className="text-xs">Rating: {rating}</p>
      <p className="text-xs">Total readers: {readByUsers}</p>
    </Link>
  );
}