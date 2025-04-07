/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
     const {setIsAuth}  =  useContext(UserContext);
     const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [username, setUsername] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && password !== confirmPassword) {
       setPasswordError("passwords do not match!")
      return;
    }
    // Add your login/signup logic here
    setIsAuth(true);
    navigate('/profile')
    console.log({ email, password, ...(isSignup && { username, confirmPassword }) });
  };
   


  return (
    <div className="flex items-start mt-7 justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white ">
        <h2 className="prata-regular text-2xl font-semibold text-center mb-6 text-[#333333]">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-[#008080] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#008080] text-[#333333] placeholder-[#333333]/50"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#008080] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#008080] text-[#333333] placeholder-[#333333]/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-[#008080] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#008080] text-[#333333] placeholder-[#333333]/50"
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-[#008080] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#008080] text-[#333333] placeholder-[#333333]/50"
            />
          )}
          {passwordError && (<p className="text-red-500">
            {passwordError}
          </p>)}
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded-sm hover:bg-teal-800 font-semibold"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-[#333333]">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-[#008080] cursor-pointer hover:text-[#006666] font-medium"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>
        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-[#b8b6b6]"></div>
          <span className="mx-4 text-[#333333]/70">or</span>
          <div className="flex-grow border-t border-[#acabab]"></div>
        </div>
        <button className="w-full flex justify-center items-center mt-4 p-3 bg-white text-[#333333] rounded-sm border-2 border-black/15 hover:border-[#008080] hover:border-2">
          <img
            className="w-6 mr-2"
            src={assets.google_icon}
            alt="google_icon"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;