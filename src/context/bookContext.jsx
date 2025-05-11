/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
const [bookMeta, setBookMeta] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: null,
    content: ""
  });

  console.log("book meta:", bookMeta);
  
  
  const values = {
         bookMeta,
         setBookMeta
  };

  return (
    <BookContext.Provider value={values}>
        {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
