export const isEmptyNumber = (num: number | null | undefined) => num === 0 || num === null || num === undefined;
export const isEmptyString = (str: string | null | undefined) =>
    str === null || str === undefined || str.trim() === "";
  
export const isWithinTheDateRange = (from: Date, to: Date, date: Date): boolean => {
    // Set the time component of the dates to midnight (00:00:00)
    const fromDate = new Date(from);
    fromDate.setHours(0, 0, 0, 0);
    const toDate = new Date(to);
    toDate.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    
    return compareDate >= fromDate && compareDate <= toDate;
};

export const calculatePageCountPerMinute = (pageReadCount: number, duration: number) =>
    duration > 0 ? pageReadCount / duration : 0;