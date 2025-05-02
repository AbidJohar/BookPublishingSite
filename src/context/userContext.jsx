/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data (e.g., { id, fullName, email, role })
  const [writer, setWriter] = useState(null); // Retain writer state


  const values = {
    user,
    setUser,
    writer,
    setWriter,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;