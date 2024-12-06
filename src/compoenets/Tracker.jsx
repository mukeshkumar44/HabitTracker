import React, { useState } from "react";
import HabitList from "./HabitList";

const Tracker = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitName) => {
    if (habitName.trim() !== "") {
      const newHabit = {
        id: Date.now(),
        name: habitName,
        days: Array(30).fill(false), // Default: unmarked days
      };
      setHabits([...habits, newHabit]);
    }
  };

  const toggleHabitDay = (habitId, dayIndex) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId
        ? {
            ...habit,
            days: habit.days.map((day, index) =>
              index === dayIndex ? !day : day
            ),
          }
        : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <div>
      <HabitList habits={habits} addHabit={addHabit} toggleHabitDay={toggleHabitDay} />
    </div>
  );
};

export default Tracker;
