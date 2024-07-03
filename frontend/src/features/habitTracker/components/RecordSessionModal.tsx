import { useTheme } from "styled-components";
import { isEmptyNumber } from "../../helper";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import PrimaryModalUI from "../../../components/PrimaryModal/PrimaryModalUI";
import PrimaryFrameUI from "../../../components/PrimaryFrameUI";
import DividerUI from "../../../components/DividerUI";
import NumberInputBasic from "../../../components/NumberInputUI";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import { useHabitTrackerProps } from "../interface";
import RecordButton from "./RecordButton";

interface RecordSessionModalProps {
  habitTracker: useHabitTrackerProps;
}

export default function RecordSessionModal({
  habitTracker,
}: RecordSessionModalProps) {
  const {
    onRecordSession,
    recordSession,
    startingPageInputVal,
    targetPageAmountInputVal,
    targetEndPage,
    durationInputVal,
    endedInPage,
    setEndedInPage,
    endedInPageInputRef,
    dontRecordSession,
    isPending,
  } = habitTracker;
  const hasTargetPage = !isEmptyNumber(targetEndPage);
  const theme = useTheme();

  const renderStatHelper = (val: number | null, label: string) => (
    <Stack alignItems={"center"} flex="1" padding="1rem 0">
      <Typography fontSize={"13px"}>{label}</Typography>
      <Typography fontSize={"34px"}>{val}</Typography>
    </Stack>
  );

  return (
    <PrimaryModalUI
      isShowing={onRecordSession}
      hasXButton={false}
      height={hasTargetPage ? "32rem" : "24rem"}
      head="RECORD SESSION"
    >
      <Stack
        width="100%"
        height="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
        paddingBottom="2rem"
      >
        <PrimaryFrameUI height="fit-content">
          <Stack direction="row" justifyContent={"space-between"}>
            {renderStatHelper(startingPageInputVal ?? 0, "PAGE STARTED")}
            <DividerUI flexItem orientation="vertical" />
            {renderStatHelper(durationInputVal ?? 0, "DURATION")}
            <DividerUI flexItem orientation="vertical" />
            {renderStatHelper(
              targetPageAmountInputVal ?? 0,
              "TARGET PAGE AMOUNT"
            )}
          </Stack>
          {hasTargetPage && (
            <>
              <DividerUI flexItem />
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width="100%"
              >
                {renderStatHelper(targetEndPage, "YOUR TARGET END PAGE")}
              </Stack>
            </>
          )}
        </PrimaryFrameUI>
        <Stack direction="row" gap="4rem">
          <Stack alignItems={"center"}>
            <Typography variant="inherit" fontSize="14px">
              ENDED IN PAGE
            </Typography>
            <NumberInputBasic
              value={endedInPage}
              setter={setEndedInPage}
              ref={endedInPageInputRef}
            />
          </Stack>
          <Stack alignItems={"center"} gap="1rem">
            <PrimaryButtonUI
              bgcolor={theme.error[100]}
              bgcolorActive={theme.error[300]}
              onClick={dontRecordSession}
            >
              DON'T RECORD
            </PrimaryButtonUI>
            <RecordButton isPending={isPending} onClick={recordSession} />
          </Stack>
        </Stack>
      </Stack>
    </PrimaryModalUI>
  );
}
