import { ObjectId } from "mongodb";

export interface BusinessMetrics {
  // OBJ
  key: number;
  durationInSeconds: number;
  pageReadCount: number;
  pageCountPerMinute: number;
}

export interface Book {
  // OBJ
  bookName: string;
  bookId: string;
  bookAuthor: string[];
  bookImageURL: string;
  latestReadDate: Date | null;
}

export interface BarDatumState {
  labels: [string, string, string, string, string];
  datasets: {
    label: string;
    data: [number, number, number, number, number];
    backgroundColor: any;
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface apiData {
  _id: ObjectId;
}

// BookTrackingData interface
export interface BookTrackingData extends BusinessMetrics, apiData {
  book: Book;
}

export interface BookCollectionApiData {
  _id: ObjectId;
  book: Book;
  userId: ObjectId;
  productivityData: productivityData[];
  totalDurationInSeconds: number;
  totalPageReadCount: number;
  totalPageCountPerMinute: number;
  latestReadDate: Date | null;
}

export interface productivityData {
  durationInSeconds: number;
  pageReadCount: number;
  pageCountPerMinute: number;
  date: Date;
  bookImageURL: string;
}
