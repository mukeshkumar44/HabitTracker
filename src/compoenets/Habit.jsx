import React from "react";

const Habit = ({ habit, toggleHabitDay }) => {
  const completedDays = habit.days.filter((day) => day).length;
  const progress = ((completedDays / habit.days.length) * 100).toFixed(1);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-purple-600">
        {habit.name}
      </h2>
      <div className="grid grid-cols-7 gap-2 mt-4">
        {habit.days.map((completed, index) => (
          <button
            key={index}
            onClick={() => toggleHabitDay(habit.id, index)}
            className={`w-10 h-10 rounded ${
              completed ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p className="text-center mt-4 text-lg text-blue-600">
        Progress: <span className="font-bold">{progress}%</span>
      </p>
    </div>
  );
};

export default Habit;
