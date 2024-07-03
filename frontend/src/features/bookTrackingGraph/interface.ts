import { SelectChangeEvent } from "@mui/material";

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
