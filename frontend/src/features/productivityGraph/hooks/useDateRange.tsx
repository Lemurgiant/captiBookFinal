import { useEffect, useState } from "react";
import { dateRange, productivityGraphFilterVal } from "../interface";

const generateDateRanges = (length: number, step: number) => {
  const today = new Date();
  return Array.from({ length }, (_, i) => ({
    from: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i * step - (step - 1)
    ),
    to: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i * step
    ),
  })).reverse();
};

const useDateRange = (filterVal: productivityGraphFilterVal) => {
  const [dateRange, setDateRange] = useState<dateRange[]>([]);

  useEffect(() => {
    switch (filterVal) {
      case "last5days":
        setDateRange(generateDateRanges(5, 1));
        break;
      case "last15days":
        setDateRange(generateDateRanges(5, 3));
        break;
      case "last5weeks":
        setDateRange(generateDateRanges(5, 7));
        break;
      case "last15weeks":
        setDateRange(generateDateRanges(5, 21));
        break;
    }
  }, [filterVal]);

  return dateRange;
};

export default useDateRange;
