/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(user === null);
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const refreshSession = async () => {
      try {
        const res = await axios.post(
          `${base_url}/v1/auth/refresh-Token`,
          {},
          { withCredentials: true }
        );
        console.log("Refresh response:", res.data);
        if (res.data.success) {
          setUser(res.data.user); // Set user from response
        } else {
          console.warn("Refresh failed:", res.data.message);
          setUser(null); // Only set null if explicitly unauthenticated
        }
      } catch (err) {
        console.error("Refresh error:", err.response?.data || err.message);
        setUser(null); // Set null on error, but log for debugging
      } finally {
        setIsLoading(false);
      }
    };

    if (user === null) {
      refreshSession();
    } else {
      setIsLoading(false);
    }
  }, [user, setUser, base_url]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;