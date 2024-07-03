import { isEmptyNumber } from "../../helper";
import { TrackerBoardHelperProps } from "../interface";

export default function TrackerBoardHelper({
  targetPageAmountInputVal,
  durationInputVal,
  startingPageInputVal,
  stopwatchValue,
  timerValue,
}: TrackerBoardHelperProps) {
  const RenderStopwatch = () => <>TIME ELAPSED: {stopwatchValue}</>;
  const RenderTimer = () => <>TIME LEFT: {timerValue}</>;
  const RenderTargetPage = () => (
    <>
      END PAGE: {(startingPageInputVal ?? 0) + (targetPageAmountInputVal ?? 0)}
    </>
  );

  return (
    <>
      {isEmptyNumber(durationInputVal) &&
      isEmptyNumber(targetPageAmountInputVal) ? (
        RenderStopwatch()
      ) : isEmptyNumber(durationInputVal) ? (
        <div style={{ textAlign: "center" }}>
          {RenderStopwatch()}
          <br /> {RenderTargetPage()}
        </div>
      ) : isEmptyNumber(targetPageAmountInputVal) ? (
        RenderTimer()
      ) : (
        <div style={{ textAlign: "center" }}>
          {RenderTimer()}
          <br /> {RenderTargetPage()}
        </div>
      )}
    </>
  );
}
