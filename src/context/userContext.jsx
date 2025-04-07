/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {  
     const [isAuth, setIsAuth] = useState(false);
     console.log(isAuth);
     

  const values = {
     isAuth,
     setIsAuth
  };

  return (
    <UserContext.Provider value={values}>
      {children} {/* Render children correctly */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
