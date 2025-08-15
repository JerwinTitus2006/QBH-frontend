import React from "react";

const HabitList = ({ habits, toggleCompleted, deleteHabit }) => {
  return (
    <div className="mt-4 space-y-3">
      {habits.map((habit) => (
        <div
          key={habit._id}
          className={`flex items-center justify-between p-3 rounded-lg shadow-md transition transform hover:scale-105 border border-purple-500/50 
            ${habit.completed ? "bg-green-700/60 text-white" : "bg-black/60 text-white"}`}
        >
          <span
            className={`font-medium ${habit.completed ? "line-through text-gray-300" : "text-white"}`}
          >
            {habit.name}
          </span>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={(e) => toggleCompleted(habit._id, e.target.checked)}
              className="w-5 h-5 accent-purple-400"
            />
            <button
              onClick={() => deleteHabit(habit._id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
