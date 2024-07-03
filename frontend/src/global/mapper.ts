import { Book, CaptiBookData, Session } from "../interfaces/globalState";

export const mapToBookCollection = (data: CaptiBookData[]): Book[] => {
  return data.map((bookTrackingApiData) => bookTrackingApiData.book);
};

export const mapToSessionCollection = (data: CaptiBookData[]): Session[] => {
  return data.flatMap((item) => item.sessions || []);
};
