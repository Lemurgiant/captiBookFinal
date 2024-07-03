import { useState, useEffect } from "react";

const useTimer = () => {
  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: any;

    if (isActive) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration <= 0) {
            setIsActive(false); // Set isActive to false when duration reaches 00:00
            return 0;
          } else {
            return prevDuration - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const startTimer = (initialDuration: any) => {
    setDuration(initialDuration);
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setDuration(0);
  };

  const formatDuration = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return {
    timerDuration: formatDuration(duration),
    isActive,
    startTimer,
    resetTimer,
  };
};

export default useTimer;
