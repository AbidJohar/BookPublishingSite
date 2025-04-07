import React, { useContext } from "react";
import { Navigate } from "react-router-dom"; // Use Navigate instead of useNavigate
import { UserContext } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(UserContext);

  console.log("ProtectedRoute isAuth:", isAuth);

  if (isAuth === null) {
    return <div>Loading...</div>; // Handle initial loading state
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render children if authenticated
};

export default ProtectedRoute;