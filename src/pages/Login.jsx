/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setUser,setWriter } = useContext(UserContext);
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const base_url = import.meta.env.VITE_BASE_URL;
 
console.log("base_URL",base_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handlesubmit is hitting");
    
    setError("");

    if(isSignup && password !== confirmPassword){
      return setError("Password do not match!")
    }

    try {
      const endpoint = isSignup
        ? `${base_url}/v1/auth/signup`
        : `${base_url}/v1/auth/login`;

      const payload = isSignup
        ? { fullName: fullName, email: email, password }
        : { email: email, password };

      const response = await axios.post(endpoint, payload, {
        withCredentials: true
      });
      console.log(response.data);

      if (response.data.success) {
        const user = response.data.user;
        console.log('Logged in user:', user);

        // Store user and accessToken
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user); // Triggers fetchWriterProfile in UserContext

        navigate('/profile');  
      } else {
        setError(response.data.message || "Something went wrong");
      }
    } catch (err) {
      
      const errorMessage = err.response?.data?.message || "Authentication failed. Please try again.";
      setError(
     errorMessage
      );
    }
  };

  return (
    <div className="flex items-start mt-7 justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white">
        <h2 className="prata-regular text-2xl font-semibold text-center mb-6 text-[#333333]">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
          {error && <p className="text-red-500">{error}</p>}
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
          <img className="w-6 mr-2" src={assets.google_icon} alt="google_icon" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;