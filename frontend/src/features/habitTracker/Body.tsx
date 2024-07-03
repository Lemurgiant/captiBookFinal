import styled from "styled-components";
import { SPRING } from "../../constants/constants";
import { withTransition } from "../../animations/withTransition";
import TrackerBoard from "./components/TrackerBoard";
import { useHabitTrackerProps } from "./interface";
import ClosedBookUI from "./components/ClosedBook";

const BodyUion = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AnimatedTrackerBoard = withTransition(TrackerBoard, SPRING.POP);
const AnimatedClosedBookUI = withTransition(ClosedBookUI, SPRING.POP);

interface BodyComponentProps {
  habitTracker: useHabitTrackerProps;
}

export default function Body({ habitTracker }: BodyComponentProps) {
  return (
    <BodyUion>
      <AnimatedTrackerBoard
        isShowing={habitTracker.isCurrentlyReading}
        targetPageAmountInputVal={habitTracker.targetPageAmountInputVal}
        durationInputVal={habitTracker.durationInputVal}
        isCurrentlyReading={habitTracker.isCurrentlyReading}
        startingPageInputVal={habitTracker.startingPageInputVal}
        stopwatchValue={habitTracker.stopwatchValue}
        timerValue={habitTracker.timerValue}
      />
      <AnimatedClosedBookUI isShowing={!habitTracker.isCurrentlyReading} />
    </BodyUion>
  );
}
