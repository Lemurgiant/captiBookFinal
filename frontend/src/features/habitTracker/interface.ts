import { ObjectId } from "mongodb";
import { CaptiBookData } from "../../interfaces/globalState";

export interface useHabitTrackerProps {
  startingPageInputVal: number | null;
  targetPageAmountInputVal: number | null;
  durationInputVal: number | null;
  setStartingPageInputVal: React.Dispatch<React.SetStateAction<number | null>>;
  setTargetPageAmountInputVal: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  setDurationInputVal: React.Dispatch<React.SetStateAction<number | null>>;
  startReading: () => void;
  stopReading: () => void;
  isCurrentlyReading: boolean;
  stopwatchValue: string;
  timerValue: string;
  recordSession: () => void;
  onRecordSession: boolean;
  targetEndPage: number | null;
  startingPageInputRef: any;
  durationInputRef: any;
  endedInPage: number | null;
  setEndedInPage: React.Dispatch<React.SetStateAction<number | null>>;
  endedInPageInputRef: any;
  dontRecordSession: () => void;
  isError: boolean;
  isPending: boolean;

  selectedBook: CaptiBookData | null;
  isSelectingBookModalOpen: boolean;
  handleIsSelectingBookModalOpen: () => void;
  handleIsSelectingBookModalClose: () => void;
  handleSelectBookId: (book: ObjectId) => void;
}

export const useHabitTrackerContextInit: useHabitTrackerProps = {
  isCurrentlyReading: false,
  targetPageAmountInputVal: null,
  durationInputVal: null,
  startingPageInputVal: null,
  stopwatchValue: "",
  timerValue: "",
  setStartingPageInputVal: () => {},
  setTargetPageAmountInputVal: () => {},
  setDurationInputVal: () => {},
  startReading: () => {},
  stopReading: () => {},
  recordSession: () => {},
  onRecordSession: false,
  targetEndPage: null,
  startingPageInputRef: null,
  durationInputRef: null,
  endedInPage: null,
  setEndedInPage: () => {},
  endedInPageInputRef: null,
  dontRecordSession: () => {},
  isError: false,
  isPending: false,

  selectedBook: null,
  isSelectingBookModalOpen: false,
  handleIsSelectingBookModalOpen: () => {},
  handleIsSelectingBookModalClose: () => {},
  handleSelectBookId: () => {},
};

export interface TrackerBoardHelperProps {
  targetPageAmountInputVal: number | null;
  durationInputVal: number | null;
  isCurrentlyReading: boolean;
  startingPageInputVal: number | null;
  stopwatchValue: string;
  timerValue: string;
}

export interface TrackerBoardProps extends TrackerBoardHelperProps {
  style?: any;
}
