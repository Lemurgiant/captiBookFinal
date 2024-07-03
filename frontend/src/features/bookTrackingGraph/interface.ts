import { SelectChangeEvent } from "@mui/material";
import { Book, BusinessMetrics } from "../interface";

export type bookTrackingBarDisplayState = [
  string | null,
  string | null,
  string | null,
  string | null,
  string | null
];

export type bookTrackingGraphFilterVal = "byEfficiency" | "byPagesRead";

export interface BookTrackingGraphSelectProps {
  value: bookTrackingGraphFilterVal;
  onChange: (event: SelectChangeEvent) => void;
}
