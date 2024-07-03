import { SelectChangeEvent } from "@mui/material";

export interface productivityBarData {
  dateRange: string;
  pagesRead: number;
  efficiency: number;
}

export interface dateRange {
  from: Date;
  to: Date;
}

export interface ProductivityGraphSelectProps {
  value: productivityGraphFilterVal;
  onChange: (event: SelectChangeEvent) => void;
}

export type productivityGraphFilterVal =
  | "last5days"
  | "last15days"
  | "last5weeks"
  | "last15weeks";
