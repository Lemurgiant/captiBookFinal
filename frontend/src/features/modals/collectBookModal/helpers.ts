import { BookLocal } from "../../../interfaces/globalState";

export function isAlreadyCollected(
  books: BookLocal[],
  bookId: string
): boolean {
  return books.some((book) => book.id === bookId);
}
