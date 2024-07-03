import { useEffect, useState } from "react";
import useBookTrackingBar from "./useBookTrackingBar";
import { useQueryClient } from "@tanstack/react-query";
import { bookTrackingGraphFilterVal } from "./../interface";
import { fiveMostEfficientBooks, fiveMostReadBooks } from "../utils/helpers";
import useBookCollectionQueryData from "../../../hooks/queries/useBookTrackingApi";
import { SelectChangeEvent } from "@mui/material";

const useBookTrackingBarWithData = () => {
  const queryClient = useQueryClient();
  const [bookTrackingGraphFilterVal, setBookTrackingGraphFilterVal] = useState<
    bookTrackingGraphFilterVal
  >("byEfficiency");
  const handleBookTrackingGraphFilterChange = (event: SelectChangeEvent) => {
    setBookTrackingGraphFilterVal(
      event.target.value as bookTrackingGraphFilterVal
    );
    queryClient.invalidateQueries({ queryKey: ["bookCollectionQueryData"] });
  };
  const {
    captiBookCollectionQueryData = [],
    isCaptiBookCollectionQueryLoading,
  } = useBookCollectionQueryData();
  const isBookCollectionQueryDataEmpty =
    captiBookCollectionQueryData?.length === 0;

  const {
    bookTrackingBarDatum,
    bookTrackingBarDisplay,
    setInitialBarData,
  } = useBookTrackingBar();

  useEffect(() => {
    if (bookTrackingGraphFilterVal == "byEfficiency") {
      setInitialBarData(
        fiveMostEfficientBooks(captiBookCollectionQueryData ?? [])
      );
    } else if (bookTrackingGraphFilterVal == "byPagesRead") {
      setInitialBarData(fiveMostReadBooks(captiBookCollectionQueryData ?? []));
    }
  }, [captiBookCollectionQueryData, bookTrackingGraphFilterVal]);

  return {
    bookTrackingBarDatum,
    bookTrackingBarDisplay,
    isCaptiBookCollectionQueryLoading,
    isBookCollectionQueryDataEmpty,
    bookTrackingGraphFilterVal,
    handleBookTrackingGraphFilterChange,
  };
};

export default useBookTrackingBarWithData;
