import { useCallback, useEffect, useRef, useState } from "react";

const useStopwatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startStopwatch = useCallback(() => {
    if (!isRunning) {
      const now = Date.now();
      setStartTime(now);
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - now);
      }, 100);
    }
  }, [isRunning]);

  const stopStopwatch = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isRunning]);

  const resetStopwatch = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return {
    elapsedTime: formatTime(elapsedTime),
    isRunning,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
  };
};

export default useStopwatch;
