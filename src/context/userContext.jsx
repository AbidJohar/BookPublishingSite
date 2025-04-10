/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {  
  const [isAuth, setIsAuth] = useState(false);
  const [writer, setWriter] = useState(null); // Add writer state

  console.log("isAuth:", isAuth);
  console.log("writer:", writer);

  const values = {
    isAuth,
    setIsAuth,
    writer,
    setWriter, // Expose setWriter to update writer data
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;