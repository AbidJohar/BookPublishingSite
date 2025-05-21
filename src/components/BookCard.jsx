/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function BookCard({ book }) {

    
    const { _id, title, coverImage, likes, dislikes, readByUsers } = book;


  return (
    <Link 
      to={`/book-details/${_id}`} 
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
      <div className="flex items-center gap-4">

      <p className="text-xs flex items-center gap-2"><FaThumbsUp/> {likes}</p>
      <p className="text-xs flex items-center gap-2"><FaThumbsDown/> {dislikes}</p>

      </div>
      <p className="text-xs">Total readers: {readByUsers}</p>
    </Link>
  );
}