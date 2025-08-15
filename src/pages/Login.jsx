import React, { useState } from "react";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login for now
    localStorage.setItem("token", "dummy-token");
    setLoggedIn(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-black overflow-hidden text-white">

      {/* Floating sparkles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}

      {/* Aura Circles */}
      <div className="absolute w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl animate-glow"></div>
      <div className="absolute w-72 h-72 bg-indigo-700 rounded-full opacity-20 blur-2xl animate-glow"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-black/50 rounded-xl shadow-xl backdrop-blur-md border border-purple-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400 animate-pulse">
          Quick Battle Habits
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-black/70 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-black/70 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded-md font-bold transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
