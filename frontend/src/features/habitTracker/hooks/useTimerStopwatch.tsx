import useStopwatch from "../../../hooks/useStopwatch";
import useTimer from "../../../hooks/useTimer";

export default function useTimerStopwatch() {
  const {
    elapsedTime,
    isRunning,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
  } = useStopwatch();
  const { timerDuration, isActive, startTimer, resetTimer } = useTimer();

  return {
    elapsedTime,
    isRunning,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    timerDuration,
    isActive,
    startTimer,
    resetTimer,
  };
}
