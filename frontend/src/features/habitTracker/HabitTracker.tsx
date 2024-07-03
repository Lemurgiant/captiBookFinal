import HabitTrackerInstance from "./HabitTrackerInstance";
import useHabitTracker from "./hooks/useHabitTracker";

const HabitTracker = () => {
  const habitTracker = useHabitTracker();
  return <HabitTrackerInstance habitTracker={habitTracker} />;
};

export default HabitTracker;
