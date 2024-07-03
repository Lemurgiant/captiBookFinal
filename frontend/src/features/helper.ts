import { Session } from "../interfaces/globalState";
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const isEmptyNumber = (num: number | null | undefined) =>
  num === 0 || num === null || num === undefined;
export const isEmptyString = (str: string | null | undefined) =>
  str === null || str === undefined || str.trim() === "";

export const isWithinTheDateRange = (
  from: Date,
  to: Date,
  date: Date
): boolean => {
  // Set the time component of the dates to midnight (00:00:00)
  const fromDate = new Date(from);
  fromDate.setHours(0, 0, 0, 0);
  const toDate = new Date(to);
  toDate.setHours(0, 0, 0, 0);
  const compareDate = new Date(date);
  compareDate.setHours(0, 0, 0, 0);

  return compareDate >= fromDate && compareDate <= toDate;
};

export const untitledHandler = (str: string | null) => {
  if (isEmptyString(str)) {
    return "Untitled";
  } else {
    return str;
  }
};

export const calculatePageCountPerMinute = (
  pageReadCount: number,
  duration: number
) => {
  const pageCountPerMinute = duration > 0 ? pageReadCount / duration : 0;
  return +pageCountPerMinute.toFixed(2);
};

export const sortSessionCollectionByLatest = (productivityDatum: Session[]) => {
  return productivityDatum.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};
export const toDurationDisplay = (durationInSeconds: number) => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  // Build the display string based on non-zero values
  const hoursDisplay = hours > 0 ? `${hours}hrs ` : "";
  const minutesDisplay = minutes > 0 ? `${minutes}min ` : "";
  const secondsDisplay = seconds !== 0 ? `${seconds}s` : "";

  return `${hoursDisplay}${minutesDisplay}${secondsDisplay}`.trim();
};
