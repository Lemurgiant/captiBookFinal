import { useState, useRef } from "react";
import useSelectableBook from "../../pure/useSelectableBook";

export default function useReadingState() {
  const {
    isSelectingBookModalOpen,
    handleIsSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
    selectedBook,
    handleSelectBookId,
  } = useSelectableBook();
  const [startingPageInputVal, setStartingPageInputVal] = useState<
    number | null
  >(null);
  const [targetPageAmountInputVal, setTargetPageAmountInputVal] = useState<
    number | null
  >(null);
  const [durationInputVal, setDurationInputVal] = useState<number | null>(null);
  const [isCurrentlyReading, setIsCurrentlyReading] = useState<boolean>(false);
  const startingPageInputRef = useRef<HTMLInputElement>(null);
  const durationInputRef = useRef<HTMLInputElement>(null);

  const targetEndPage =
    startingPageInputVal && targetPageAmountInputVal
      ? startingPageInputVal + targetPageAmountInputVal
      : null;

  return {
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
  };
}
