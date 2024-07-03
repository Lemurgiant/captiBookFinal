import { Book } from "../interfaces/captiBookProps";

export function isAlreadyCollected(books: Book[], bookId: string): boolean {
    return books.some(book => book.bookId === bookId);
  }