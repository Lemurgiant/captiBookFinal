import useReadingState from "./useReadingState";
import useTimerStopwatch from "./useTimerStopwatch";
import useSessionRecorder from "./useSessionRecorder";
import { isEmptyNumber } from "../../helper";
import { useEffect } from "react";

export default function useHabitTracker() {
  const {
    startingPageInputVal,
    targetPageAmountInputVal,
    durationInputVal,
    setStartingPageInputVal,
    setTargetPageAmountInputVal,
    setDurationInputVal,
    isCurrentlyReading,
    setIsCurrentlyReading,
    startingPageInputRef,
    durationInputRef,
    targetEndPage,
    selectedBook,
    isSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
    handleIsSelectingBookModalOpen,
    handleSelectBookId,
  } = useReadingState();

  const {
    elapsedTime,
    startStopwatch,
    resetStopwatch,
    timerDuration,
    startTimer,
    resetTimer,
  } = useTimerStopwatch();

  const {
    onRecordSession,
    setOnRecordSession,
    endedInPage,
    setEndedInPage,
    endedInPageInputRef,
    dontRecordSession,
    recordSession,
    isError,
    isPending,
  } = useSessionRecorder();

  const hasNoDuration = isEmptyNumber(durationInputVal);

  const startReading = () => {
    if (startingPageInputVal && durationInputVal) {
      setIsCurrentlyReading(true);
      if (hasNoDuration) {
        startStopwatch();
      } else {
        startTimer(durationInputVal);
      }
    } else if (startingPageInputVal) {
      durationInputRef?.current?.focus();
    } else {
      startingPageInputRef?.current?.focus();
    }
  };

  const stopReading = () => {
    setIsCurrentlyReading(false);
    setOnRecordSession(true);
    setEndedInPage(targetEndPage);
    if (hasNoDuration) {
      resetStopwatch();
    } else {
      resetTimer();
    }
  };

  return {
    startingPageInputVal,
    targetPageAmountInputVal,
    durationInputVal,
    setStartingPageInputVal,
    setTargetPageAmountInputVal,
    setDurationInputVal,
    startReading,
    stopReading,
    isCurrentlyReading,
    stopwatchValue: elapsedTime,
    timerValue: timerDuration,
    recordSession: () => {
      recordSession(
        endedInPage,
        startingPageInputVal,
        durationInputVal,
        selectedBook?.book?.imageURL ?? "",
        selectedBook!._id
      );
    },
    onRecordSession,
    targetEndPage,
    startingPageInputRef,
    durationInputRef,
    endedInPage,
    setEndedInPage,
    endedInPageInputRef,
    dontRecordSession,
    isError,
    isPending,
    selectedBook,
    isSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
    handleIsSelectingBookModalOpen,
    handleSelectBookId,
  };
}
