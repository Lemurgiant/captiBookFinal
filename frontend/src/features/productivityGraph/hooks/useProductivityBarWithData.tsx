import { useEffect, useMemo } from "react";
import { formatDate } from "../../../utils/formatDate";
import { isWithinTheDateRange } from "../../../utils/helper";
import useProductivityBar from "./useProductivityBar";
import useBookTrackingApi from "../../../hooks/queries/useBookTrackingApi";
import { productivityData } from "../../interface";
import { dateRange } from "../interface";
import { Session } from "../../../interfaces/globalState";
import { mapToSessionCollection } from "../../../global/mapper";

const useProductivityBarWithData = (dateRange: dateRange[]) => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
  } = useBookTrackingApi();
  const sessionCollection = mapToSessionCollection(
    captiBookCollectionQueryData
  );

  const { productivityBarDatum, setInitialBarData } = useProductivityBar();

  useEffect(() => {
    const data = dateRange.map((range) => ({
      dateRange: `${formatDate(range.from)} - ${formatDate(range.to)}`,
      pagesRead: 0,
      efficiency: 0,
    }));

    sessionCollection.forEach((dataPoint: Session) => {
      const dataDate = new Date(dataPoint.date);
      const index = dateRange.findIndex((range) =>
        isWithinTheDateRange(range.from, range.to, dataDate)
      );
      if (index !== -1) {
        data[index] = {
          ...data[index],
          pagesRead: data[index].pagesRead + dataPoint.pagesRead,
          efficiency: data[index].efficiency + dataPoint.pagesReadPerMinute,
        };
      }
    });

    setInitialBarData(data);
  }, [captiBookCollectionQueryData, dateRange]);

  return {
    productivityBarDatum,
    isProductivityQueryLoading: isCaptiBookCollectionQueryLoading,
    isProductivityBarDatumEmpty: sessionCollection?.length === 0,
  };
};

export default useProductivityBarWithData;
