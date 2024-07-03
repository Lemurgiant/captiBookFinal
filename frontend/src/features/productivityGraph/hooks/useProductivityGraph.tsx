import { useState } from "react";
import { productivityGraphFilterVal } from "../interface";
import useDateRange from "./useDateRange";
import useProductivityBarWithData from "./useProductivityBarWithData";
import { useQueryClient } from "@tanstack/react-query";
import { SelectChangeEvent } from "@mui/material";

export default function useProductivityGraph() {
  const queryClient = useQueryClient();
  const [productivityGraphFilterVal, setProductivityGraphFilterVal] = useState<
    productivityGraphFilterVal
  >("last5days");

  const dateRange = useDateRange(productivityGraphFilterVal);
  const {
    productivityBarDatum,
    isProductivityQueryLoading,
    isProductivityBarDatumEmpty,
  } = useProductivityBarWithData(dateRange);
  const handleChange = (event: SelectChangeEvent) => {
    setProductivityGraphFilterVal(
      event.target.value as productivityGraphFilterVal
    );
    queryClient.invalidateQueries({ queryKey: ["productivityData"] });
  };

  return {
    productivityBarDatum,
    productivityGraphFilterVal,
    handleChange,
    isProductivityQueryLoading,
    isProductivityBarDatumEmpty,
  };
}
