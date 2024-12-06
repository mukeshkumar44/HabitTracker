import React, { useState, useEffect } from "react";

const Home = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [progress, setProgress] = useState(0);

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { name: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);

    const completedCount = updatedHabits.filter((habit) => habit.completed).length;
    setProgress((completedCount / updatedHabits.length) * 100);
  };

  const resetHabits = () => {
    const resetHabits = habits.map((habit) => ({ ...habit, completed: false }));
    setHabits(resetHabits);
    setProgress(0);
  };

  useEffect(() => {
    const resetInterval = setInterval(() => {
      resetHabits();
      alert("Your habit tracker has been reset for the new week!");
    }, 7 * 24 * 60 * 60 * 1000); 

    return () => clearInterval(resetInterval); 
  }, [habits]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Habit Tracker
      </h1>

      <div className="text-center">
        <input
          type="text"
          placeholder="Enter your habit"
          value={newHabit}
          className="border-2 border-green-600 outline-none w-full sm:w-80 rounded-xl text-center h-12 p-2"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5 ml-0 sm:ml-3"
          onClick={addHabit}
        >
          Add Habit
        </button>
      </div>

      <div className="mt-10">
        <hr />
        <h1 className="text-3xl text-center mb-4">Habit List</h1>
        <div className="flex flex-col items-center sm:items-start">
          <ol className="w-full sm:w-auto sm:ml-20 list-none">
            {habits.map((habit, index) => (
              <li
                key={index}
                className="flex items-center text-xl mb-4 bg-white shadow rounded-lg p-2"
              >
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(index)}
                  className="mr-3 h-6 w-6"
                />
                {habit.name}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl text-green-700">
          Progress: {progress.toFixed(1)}%
        </h2>
      </div>
    </div>
  );
};

export default Home;
