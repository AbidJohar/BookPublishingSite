/* eslint-disable react/prop-types */
import { createContext } from "react";

export const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {


  const values = {

  };

  return (
    <BookContext.Provider value={values}>
        {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
