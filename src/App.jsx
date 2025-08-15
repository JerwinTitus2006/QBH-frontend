import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  if (loggedIn) {
    return <Dashboard setLoggedIn={setLoggedIn} />;
  }

  return (
    <div>
      {showSignup ? (
        <>
          <Signup setLoggedIn={setLoggedIn} />
          <div className="text-center mt-2">
            Already have an account?{" "}
            <button
              className="text-blue-500 underline"
              onClick={() => setShowSignup(false)}
            >
              Login
            </button>
          </div>
        </>
      ) : (
        <>
          <Login setLoggedIn={setLoggedIn} />
          <div className="text-center mt-2">
            Don't have an account?{" "}
            <button
              className="text-blue-500 underline"
              onClick={() => setShowSignup(true)}
            >
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
