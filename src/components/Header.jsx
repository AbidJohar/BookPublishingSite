/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex items-center shadow-sm justify-between py-5 font-medium bg-teal-600 px-7 ">
      {/* Navbar logo */}
      <NavLink to="/">
  <h1 
    className="lobster-regular tracking-widest text-4xl sm:text-4xl text-black hover:text-[#FFD700] [text-shadow:_0_2px_0px_rgba(255,215,0,1)] hover:[text-shadow:_0_1px_1px_rgba(255,215,0,1)] transition-all duration-300 ease-in-out"
  >
    Haroof
  </h1>
</NavLink>

      {/* Navbar anchor tags for linking */}
      <ul className="hidden md:flex gap-5 text-md text-[#333333]">
        {["HOME", "BECOMEAWRITER", "CATEGORY", "ABOUT", "CONTACT"].map(
          (link) => (
            <li key={link} className="relative">
              <NavLink
                to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                className={`${activeLink === link ? "text-[#FFD700]" : ""}`}
                onClick={() => handleClick(link)}
              >
                {link}
              </NavLink>
              {activeLink === link && (
                <span className="absolute left-0 bottom-[-2px] w-full h-[1.6px] bg-[#FFD700] transition-all duration-300"></span>
              )}
            </li>
          )
        )}
      </ul>

      {/* Navbar for icons like search, cart, etc. */}
      <div className="flex items-center gap-4">
        {/* <img
          className="w-5"
          src={assets.search_icon}
          alt="search"
        /> */}

        {/* Dropdown menu for profile */}
        <div className="group relative">
          <Link to={"/userlogin"}>
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Profile Icon"
            />
          </Link>

          <div className="group-hover:block hidden z-50 absolute right-0 mt-0 bg-[#008080] text-white rounded-lg shadow-lg overflow-hidden w-48">
            <div className="flex flex-col px-4 py-3">
              <p className="py-1 px-4 hover:bg-[#FFD700] hover:text-[#333333] rounded-md cursor-pointer transition duration-200 ease-in-out">
                My Profile
              </p>
              <p className="py-1 px-4 hover:bg-[#FFD700] hover:text-[#333333] rounded-md cursor-pointer transition duration-200 ease-in-out">
                Orders
              </p>
              <p className="py-1 px-4 hover:bg-[#FFD700] hover:text-[#333333] rounded-md cursor-pointer transition duration-200 ease-in-out">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Cart with item count */}
        <Link to="/cart" className="relative">
          <img className="w-5" src={assets.cart_icon} alt="cart-icon" />
          <p className="absolute flex items-center text-sm justify-center right-[-13px] top-0 rounded-full w-5 h-4 bg-[#FFD700] text-black text-center">
            0
          </p>
        </Link>

        {/* Hamburger menu icon for small screens */}
        <img
          onClick={() => setIsSideBarActive(true)}
          className="w-5 cursor-pointer md:hidden"
          src={assets.menu_icon}
          alt="menu-icon"
        />
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#008080] text-white transition-all duration-300 ${
          isSideBarActive ? "w-full" : "w-0"
        } z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <img
            onClick={() => setIsSideBarActive(false)}
            className="w-4 cursor-pointer"
            src={assets.dropdown_icon}
            alt="dropdown"
          />
          <p className="text-xl font-semibold">Menu</p>
        </div>

        {/* Sidebar links */}
        <div className="flex flex-col  items-center gap-4 text-lg">
          {["Home", "Collection", "About", "Contact"].map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase()}`}
              className="py-2 px-4 w-full text-center hover:bg-[#FFD700] hover:text-[#333333] rounded-md"
              onClick={() => {
                handleClick(link);
                setIsSideBarActive(false);
              }}
            >
              {link}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
