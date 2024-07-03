import { UseMutateFunction } from "@tanstack/react-query";
import { Book, BookLocal } from "../../../interfaces/globalState";

// CollectionBookGrid.tsx

export interface CollectBookGridProps {
  collectedBooks: Book[];
  books: BookLocal[];
  isLoading: boolean;
  addBookToCollectionMutate: UseMutateFunction<any, Error, BookLocal, unknown>;
}

//-----------------------------------------------------------------//

// CollectBookModalInstance.tsx

export interface CollectBookModalInstanceProps {
  isShowing: boolean;
  handleClose: () => void;
  searchInputVal: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchedBooks: BookLocal[];
  isGridLoading: boolean;
  addBookToCollectionMutate: UseMutateFunction<any, Error, BookLocal, unknown>;
  collectedBooks: Book[];
}

//----------------------------------------------------------------//

// SearchedBook.tsx

export interface SearchedBookProps {
  book: BookLocal;
  isAlreadyCollected: boolean;
  addBookToCollectionMutate: UseMutateFunction<any, Error, BookLocal, unknown>;
}
