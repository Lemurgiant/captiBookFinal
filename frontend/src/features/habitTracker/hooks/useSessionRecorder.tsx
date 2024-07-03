import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { calculatePageCountPerMinute, isEmptyNumber } from "../../helper";
import { recordProductivityDataAxios } from "../../services";
import { ObjectId } from "mongodb";

interface RecordProductivityDataParams {
  key: number;
  durationInSeconds: number;
  pageReadCount: number;
  pageCountPerMinute: number;
  bookImageURL: string;
  bookId: ObjectId;
}

export default function useSessionRecorder() {
  const [onRecordSession, setOnRecordSession] = useState<boolean>(false);
  const [endedInPage, setEndedInPage] = useState<number | null>(null);
  const endedInPageInputRef = useRef<HTMLInputElement>(null);

  const dontRecordSession = () => {
    setOnRecordSession(false);
  };

  const {
    mutate: recordProductivityData,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["recordProductivityData"],
    mutationFn: ({
      key,
      durationInSeconds,
      pageReadCount,
      pageCountPerMinute,
      bookImageURL,
      bookId,
    }: RecordProductivityDataParams) =>
      recordProductivityDataAxios(
        key,
        durationInSeconds,
        pageReadCount,
        pageCountPerMinute,
        bookImageURL,
        bookId
      ),
    onSuccess: (data) => {
      setOnRecordSession(false);
    },
    onError: (error) => {
      console.error("Failed to record productivity data:", error);
    },
  });

  const recordSession = (
    endedInPage: number | null,
    startingPage: number | null,
    duration: number | null,
    bookImageURL: string,
    bookId: ObjectId
  ) => {
    if (!isEmptyNumber(endedInPage) && endedInPage! > startingPage!) {
      const pageReadCount = (endedInPage as number) - (startingPage as number);
      const validDuration = duration ?? 0;
      const pageCountPerMinute = calculatePageCountPerMinute(
        pageReadCount,
        validDuration
      );

      recordProductivityData({
        key: 0,
        durationInSeconds: validDuration * 60,
        pageReadCount,
        pageCountPerMinute,
        bookImageURL,
        bookId,
      });
    } else {
      endedInPageInputRef?.current?.focus();
    }
  };

  return {
    onRecordSession,
    setOnRecordSession,
    endedInPage,
    setEndedInPage,
    endedInPageInputRef,
    dontRecordSession,
    recordSession,
    isPending,
    isError,
    error,
    isSuccess,
  };
}
