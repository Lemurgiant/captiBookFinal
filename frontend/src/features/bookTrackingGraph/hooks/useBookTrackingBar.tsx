import { useState } from "react";
import { BarDatumState } from "../../interface";
import { bookTrackingBarDatumInit } from "../constants";
import { bookTrackingBarDisplayState } from "../interface";
import { CaptiBookData } from "../../../interfaces/globalState";
import { useTheme } from "styled-components";

const useBookTrackingBar = () => {
  const theme = useTheme();
  const [bookTrackingBarDatum, setBookTrackingBarDatum] = useState<
    BarDatumState
  >(bookTrackingBarDatumInit(theme));
  const [bookTrackingBarDisplay, setBookTrackingBarDisplay] = useState<
    bookTrackingBarDisplayState
  >([null, null, null, null, null]);

  const setInitialBarData = (bookTrackingBarData: (CaptiBookData | null)[]) => {
    const updatedBookTrackingBarDatum = { ...bookTrackingBarDatum };
    const updatedBookTrackingBarDisplay: bookTrackingBarDisplayState = [
      null,
      null,
      null,
      null,
      null,
    ];

    bookTrackingBarData.forEach((dataCol, index) => {
      if (dataCol) {
        if (index < updatedBookTrackingBarDatum.labels.length) {
          updatedBookTrackingBarDatum.datasets[0].data[index] =
            dataCol.totalPagesRead;
          updatedBookTrackingBarDatum.datasets[1].data[index] =
            dataCol.totalPagesReadPerMinute;
        }
        updatedBookTrackingBarDisplay[index] = dataCol.book.imageURL;
      }
    });

    setBookTrackingBarDatum(updatedBookTrackingBarDatum);
    setBookTrackingBarDisplay(updatedBookTrackingBarDisplay);
  };

  return {
    bookTrackingBarDatum,
    bookTrackingBarDisplay,
    setInitialBarData,
  };
};

export default useBookTrackingBar;
