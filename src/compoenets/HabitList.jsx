import React, { useState } from "react";
import Habit from "./Habit";

const HabitList = ({ habits, addHabit, toggleHabitDay }) => {
  const [newHabit, setNewHabit] = useState("");

  const handleAddHabit = () => {
    addHabit(newHabit);
    setNewHabit("");
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Habit Tracker
      </h1>

      <div className="text-center">
        <input
          type="text"
          placeholder="Enter your habit"
          value={newHabit}
          className="border-2 border-green-600 outline-none w-80 rounded-xl text-center h-12"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5 ml-3"
          onClick={handleAddHabit}
        >
          Add Habit
        </button>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl text-center mb-4">Habit List</h1>
        {habits.length === 0 ? (
          <p className="text-center text-gray-500">No habits added yet!</p>
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                toggleHabitDay={toggleHabitDay}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitList;
