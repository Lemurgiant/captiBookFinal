import { useEffect, useMemo, useState } from "react";
import { productivityBarData } from "../interface";
import { productivityBarDatumInit } from "../constants";
import { BarDatumState } from "../../interface";
import { useTheme } from "styled-components";

const useProductivityBar = () => {
  const theme = useTheme();
  const initialProductivityBarDatum = useMemo(
    () => productivityBarDatumInit(theme),
    [theme]
  );
  const [productivityBarDatum, setProductivityBarDatum] = useState<
    BarDatumState
  >(initialProductivityBarDatum);

  const setInitialBarData = (productivityBarData: productivityBarData[]) => {
    const updatedProductivityChartData = { ...productivityBarDatum };

    productivityBarData.forEach((dataCol, index) => {
      if (index < updatedProductivityChartData.labels.length) {
        updatedProductivityChartData.labels[index] = dataCol.dateRange;
        updatedProductivityChartData.datasets[0].data[index] =
          dataCol.pagesRead;
        updatedProductivityChartData.datasets[1].data[index] =
          dataCol.efficiency;
      }
    });
    setProductivityBarDatum(updatedProductivityChartData);
  };

  return { productivityBarDatum, setInitialBarData };
};

export default useProductivityBar;
