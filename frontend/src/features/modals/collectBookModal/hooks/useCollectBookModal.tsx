import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import {
  addOneBookCollectionDataAxios,
  getSearchBooksAxios,
} from "../../../services";
import { BookLocal } from "../../../../interfaces/globalState";

function useSearchBooks(debouncedSearchTerm: string) {
  const {
    data: searchBooksQueryData,
    isLoading: isSearchBooksQueryLoading,
  } = useQuery<any>({
    queryKey: ["searchBooksQuery", debouncedSearchTerm],
    queryFn: () => getSearchBooksAxios(debouncedSearchTerm),
  });

  const searchedBooksParser = (books: any[]): BookLocal[] => {
    const parsedBooks = books.map((book) => ({
      title: book.volumeInfo.title,
      imageURL: book.volumeInfo.imageLinks?.thumbnail,
      authors: book.volumeInfo.authors?.join(", "),
      id: book.id,
    }));
    return parsedBooks;
  };

  const searchedBooks = searchBooksQueryData?.items
    ? searchedBooksParser(searchBooksQueryData.items)
    : [];

  return { searchedBooks, isSearchBooksQueryLoading };
}
export function useCollectBookModal() {
  const queryClient = useQueryClient();
  const [searchTermInputVal, setSearchTermInputVal] = useState("");
  const debouncedSearchTerm = useDebounce(searchTermInputVal, 400);

  const handleSearchTermInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTermInputVal(e.target.value);
  };

  const {
    searchedBooks,
    isSearchBooksQueryLoading: isGridLoading,
  } = useSearchBooks(debouncedSearchTerm);

  const { mutate: addBookToCollectionMutate } = useMutation({
    mutationKey: ["addBookToCollectionMutate"],
    mutationFn: addOneBookCollectionDataAxios,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      }),
  });

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["searchBooks"],
    });
  }, [debouncedSearchTerm, queryClient]);

  return {
    searchTermInputVal,
    handleSearchTermInputChange,
    searchedBooks,
    isGridLoading,
    addBookToCollectionMutate,
  };
}
