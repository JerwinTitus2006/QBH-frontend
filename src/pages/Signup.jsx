import React, { useState } from "react";
import axios from "axios";

const Signup = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center rpg-bg">
      {/* Game Title */}
      <h1 className="text-4xl font-bold text-purple-400 mb-6 animate-pulse">
        Quick Battle Habits
      </h1>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 border border-purple-500/50 p-8 rounded-2xl shadow-2xl w-80 
                   transform transition-transform hover:scale-105 backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-400 animate-pulse">
          Sign Up
        </h2>
        {error && <p className="text-red-400 mb-3">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-black/60 text-white 
                     border border-purple-500/50 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-black/60 text-white 
                     border border-purple-500/50 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg 
                     hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
