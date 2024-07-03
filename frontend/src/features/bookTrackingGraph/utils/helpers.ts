import { CaptiBookData } from "../../../interfaces/globalState";
import { Book, BookCollectionApiData } from "../../interface";

export function hasEverRead(book: CaptiBookData) {
  return book.latestReadDate !== null && book.sessions.length !== 0;
}

export function fiveMostEfficientBooks(
  captiBookData: CaptiBookData[]
): (CaptiBookData | null)[] {
  const readBooks = captiBookData.filter(hasEverRead);

  const sortedBooks = readBooks.sort(
    (a, b) => b.totalPagesReadPerMinute - a.totalPagesReadPerMinute
  );
  const topFive = sortedBooks.slice(0, 5) as (CaptiBookData | null)[];

  while (topFive.length < 5) {
    topFive.push(null);
  }

  return topFive;
}
export function fiveMostReadBooks(
  captiBookData: CaptiBookData[]
): (CaptiBookData | null)[] {
  const readBooks = captiBookData.filter(hasEverRead);

  const sortedBooks = readBooks.sort(
    (a, b) => b.totalPagesReadPerMinute - a.totalPagesReadPerMinute
  );
  const topFive = sortedBooks.slice(0, 5) as (CaptiBookData | null)[];

  while (topFive.length < 5) {
    topFive.push(null);
  }

  return topFive;
}
