/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/userContext.jsx";
import BookContextProvider from "./context/bookContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <UserContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
