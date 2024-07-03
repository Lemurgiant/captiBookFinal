import React from "react";
import HabitTrackerInstance from "./HabitTrackerInstance";
import useHabitTracker from "./hooks/useHabitTracker";

const HabitTracker = () => {
  const habitTracker = useHabitTracker();
  return (
    <HabitTrackerInstance habitTracker={habitTracker} bookImage="sample" />
  );
};

export default HabitTracker;
