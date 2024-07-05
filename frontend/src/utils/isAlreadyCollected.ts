import { Book } from "../interfaces/globalState";

export function isAlreadyCollected(books: Book[], bookId: string): boolean {
  return books.some((book) => book.bookId === bookId);
}
