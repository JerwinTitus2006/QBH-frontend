import React from "react";

const HabitItem = ({ habit, toggleCompleted, deleteHabit }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 border-b ${
        habit.completed ? "bg-green-100" : ""
      }`}
    >
      <span className={`${habit.completed ? "line-through" : ""}`}>
        {habit.name}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => toggleCompleted(habit.id)}
        />
        <button
          onClick={() => deleteHabit(habit.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
