import { Stack } from "@mui/material";
import styled from "styled-components";
import PrimaryTextField from "../../../components/PrimaryTextFieldUI";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import DividerUI from "../../../components/DividerUI";
import AnimatedReadingInProgress from "./AnimatedReadingInProgress";
import TrackerBoardHelper from "./TrackerBoardHelperUI";
import { TrackerBoardProps } from "../interface";

const TrackerBoardUIon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default function TrackerBoard({
  style,
  targetPageAmountInputVal,
  durationInputVal,
  isCurrentlyReading,
  startingPageInputVal,
  stopwatchValue,
  timerValue,
}: TrackerBoardProps) {
  return (
    <TrackerBoardUIon style={style}>
      <Stack alignItems={"center"} gap="4rem" width="100%">
        <Stack gap="1rem">
          <Stack direction="row" gap="0.6rem">
            <PrimaryTextField
              label="Word"
              size="small"
              sx={{ width: "22rem" }}
            />
            <PrimaryButtonUI>ADD WORD</PrimaryButtonUI>
          </Stack>
          <Stack direction="row" gap="0.6rem">
            <PrimaryTextField
              label="Quote"
              size="small"
              sx={{ width: "22rem" }}
            />
            <PrimaryButtonUI>ADD QUOTE</PrimaryButtonUI>
          </Stack>
        </Stack>
        <DividerUI flexItem />
        <AnimatedReadingInProgress />
        <DividerUI flexItem />
        <TrackerBoardHelper
          targetPageAmountInputVal={targetPageAmountInputVal}
          durationInputVal={durationInputVal}
          isCurrentlyReading={isCurrentlyReading}
          startingPageInputVal={startingPageInputVal}
          stopwatchValue={stopwatchValue}
          timerValue={timerValue}
        />
      </Stack>
    </TrackerBoardUIon>
  );
}
