import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import AddHabitForm from "../components/AddHabitForm";
import HabitList from "../components/HabitList";
import MonsterStatus from "../components/MonsterStatus";

const Dashboard = ({ setLoggedIn }) => {
  const [habits, setHabits] = useState([]);
  const [monster, setMonster] = useState(null);

  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const fetchHabits = async () => {
    try {
      const res = await axios.get("https://qbh-backend.onrender.com/api/habits", config);
      setHabits(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMonster = async () => {
    try {
      const res = await axios.get(
        "https://qbh-backend.onrender.com/api/monster/hp",
        config
      );
      setMonster(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHabits();
    fetchMonster();
  }, []);

  const addHabit = async (name) => {
    try {
      const res = await axios.post(
        "https://qbh-backend.onrender.com/api/habits",
        { name },
        config
      );
      setHabits([...habits, res.data.habit]);
      setMonster(res.data.monster);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleCompleted = async (id, completed) => {
    try {
      const res = await axios.patch(
        `https://qbh-backend.onrender.com/api/habits/${id}`,
        { completed },
        config
      );
      setHabits(habits.map((h) => (h._id === id ? res.data.habit : h)));
      setMonster(res.data.monster);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHabit = async (id) => {
    try {
      const res = await axios.delete(
        `https://qbh-backend.onrender.com/api/habits/${id}`,
        config
      );
      setHabits(habits.filter((h) => h._id !== id));
      if (res.data.monster) setMonster(res.data.monster);
    } catch (err) {
      console.error(err);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-game relative text-white overflow-hidden">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Navbar */}
      <Navbar />

      {/* Logout Button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* Game Title */}
      <h1 className="game-title text-4xl font-bold text-purple-400 text-center pt-6 animate-pulse">
        Quick Battle Habits
      </h1>

      {/* Dashboard Content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10 animate-glow">
        <MonsterStatus monster={monster} />
        <AddHabitForm addHabit={addHabit} />
        <HabitList
          habits={habits}
          toggleCompleted={toggleCompleted}
          deleteHabit={deleteHabit}
        />
      </div>
    </div>
  );
};

export default Dashboard;
