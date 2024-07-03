import { ObjectId } from "mongodb";

export interface BookLocal {
  title: string;
  id: string;
  authors: string[];
  imageURL: string;
}

export interface Book extends BookLocal {
  _id: ObjectId;
}

export interface Session {
  _id: ObjectId;
  pagesRead: number;
  pagesReadPerMinute: number;
  durationInSeconds: number;
  date: Date;
  imageURL: string;
  bookId: ObjectId; // JoiningKey
}

export interface CaptiBookData {
  //captiBookCollectionQueryData
  _id: ObjectId;
  userId: ObjectId;
  book: Book;
  sessions: Session[];
  summaryInsights: SummaryItem[];
  termInsights: TermItem[];
  quoteInsights: QuoteItem[];
  totalPagesRead: number;
  totalPagesReadPerMinute: number;
  totalDurationInSeconds: number;
  latestReadDate: Date | null;
}

export interface InsightItem {
  _id: ObjectId;
  date: Date;
}

export interface SummaryItemLocal {
  summaryContent: string;
  reference: string | null;
  bookId: ObjectId; //joining key
}

export interface TermItemLocal {
  definition: string | null;
  term: string;
  bookId: ObjectId; //joining key
}

export interface QuoteItemLocal {
  quoteContent: string;
  reference: string | null;
  bookId: ObjectId; //joining key
}

export interface SummaryItem extends InsightItem, SummaryItemLocal {}
export interface TermItem extends InsightItem, TermItemLocal {}
export interface QuoteItem extends InsightItem, QuoteItemLocal {}
