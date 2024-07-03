import { Stack, Typography } from "@mui/material";
import { useMemo, useRef } from "react";
import NumberInputBasic from "../../components/NumberInputUI";
import DividerUI from "../../components/DividerUI";
import ReadButton from "./components/ReadButton";
import { useHabitTrackerProps } from "./interface";
import BookUI from "../../components/BookUI";
import SelectableBook from "../../components/featured/SelectableBook";

interface AsideWrapperProps {
  bookImage: string;
  habitTracker: useHabitTrackerProps;
}

function Aside({ bookImage, habitTracker }: AsideWrapperProps) {
  const {
    startingPageInputVal,
    targetPageAmountInputVal,
    durationInputVal,
    setStartingPageInputVal,
    setTargetPageAmountInputVal,
    setDurationInputVal,
    startReading,
    stopReading,
    isCurrentlyReading,
    startingPageInputRef,
    durationInputRef,
    handleIsSelectingBookModalOpen,
    selectedBook,
  } = habitTracker;
  const inputRef = useRef<any>(null);

  const renderInput = (
    label: string,
    value: number | null,
    setter: React.Dispatch<React.SetStateAction<number | null>>,
    isDisabled: boolean,
    ref?: any
  ) => {
    return useMemo(
      () => (
        <Stack alignItems={"center"} gap="0.3rem">
          <Typography variant="inherit" fontSize="13px">
            {label}
          </Typography>
          <NumberInputBasic
            value={value}
            setter={setter}
            disabled={isDisabled}
            ref={ref}
          />
        </Stack>
      ),
      [value, isDisabled]
    );
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-between"}
      padding="2rem 0"
      gap="1.5rem"
    >
      <SelectableBook
        handleIsSelectingBookModalOpen={handleIsSelectingBookModalOpen}
        bookImageURL={selectedBook?.book?.imageURL ?? ""}
      />
      <DividerUI flexItem />
      <Stack gap="2rem">
        {renderInput(
          "Starting Page:",
          startingPageInputVal,
          setStartingPageInputVal,
          isCurrentlyReading || selectedBook === null,
          startingPageInputRef
        )}
        {renderInput(
          "Duration (min):",
          durationInputVal,
          setDurationInputVal,
          isCurrentlyReading || selectedBook === null,
          durationInputRef
        )}
        {renderInput(
          "Target Page Amount (optional):",
          targetPageAmountInputVal,
          setTargetPageAmountInputVal,
          isCurrentlyReading || selectedBook === null
        )}
        <ReadButton
          type={isCurrentlyReading ? "stop" : "start"}
          onClick={isCurrentlyReading ? stopReading : startReading}
          isDisabled={selectedBook === null}
        />
      </Stack>
    </Stack>
  );
}

export default Aside;
