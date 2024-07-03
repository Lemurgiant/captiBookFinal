import { useTheme } from "styled-components";
import { BarDatumState } from "../interface";

export const bookTrackingBarDatumInit = (theme: any): BarDatumState => {
  return {
    labels: ["", "", "", "", ""],
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
