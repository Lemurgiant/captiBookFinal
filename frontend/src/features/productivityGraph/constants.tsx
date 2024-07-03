import { useTheme } from "styled-components";
import { BarDatumState } from "../interface";

export const productivityBarDatumInit = (theme: any): BarDatumState => {
  return {
    labels: [
      "Jan 1 - 7",
      "Jan 8 - 14",
      "Jan 15 - 21",
      "Jan 22 - 28",
      "Jan 29 - Feb 5",
    ],
    datasets: [
      {
        label: "PAGES READ",
        data: [0, 0, 0, 0, 0],
        backgroundColor: theme.primary[200],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "EFFICIENCY (Page/min)",
        data: [0, 0, 0, 0, 0],
        backgroundColor: theme.light,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
};
