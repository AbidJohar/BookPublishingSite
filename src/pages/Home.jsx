/* eslint-disable no-unused-vars */
import React from "react";
import TopRatedBooks from "../components/TopRated";
import HeroSection from "../components/HeroSection";
import MostReadBooks from "../components/MostReadBooks";
import RecentlyUploadedBooks from "../components/RecentlyUploadedBooks";
import HorrorSection from "../components/HorrorSection";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <RecentlyUploadedBooks />
      <TopRatedBooks />
      <MostReadBooks />
      <HorrorSection />
    </div>
  );
};

export default Home;

