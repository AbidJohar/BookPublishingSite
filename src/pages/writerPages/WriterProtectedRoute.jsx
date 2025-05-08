/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const WriterProtectedRoute = ({ redirectTo = '/becomeawriter', children }) => {
  const { writer, loading } = useContext(UserContext);

  // Wait for loading to complete to ensure writer state is restored
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  // If writer exists, redirect to dashboard (for protected routes like WriterForm)
  // or render the dashboard (for WriterDashboard)
  if (writer) {
    if (redirectTo === '/becomeawriter') {
      return <Navigate to="/writer-dashboard" replace />;
    }
    return children ? children : <Outlet />;
  }

  // If no writer, redirect to becomeawriter (for WriterDashboard)
  // or render the form (for WriterForm)
  return redirectTo === '/writer-dashboard' ? (
    <Navigate to="/becomeawriter" replace />
  ) : (
    children ? children : <Outlet />
  );
};

export default WriterProtectedRoute;