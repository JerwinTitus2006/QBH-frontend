import React, { useState } from "react";

const AddHabitForm = ({ addHabit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addHabit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="New habit..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-grow p-2 rounded-l-lg 
                   border border-purple-500/50 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 
                   transition bg-black/60 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 rounded-r-lg 
                   hover:bg-purple-700 transition transform hover:scale-105"
      >
        Add
      </button>
    </form>
  );
};

export default AddHabitForm;
