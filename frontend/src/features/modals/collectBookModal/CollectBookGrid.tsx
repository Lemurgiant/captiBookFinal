import styled from "styled-components";
import { Book } from "../../interface";
import PrimarySpinner from "../../../components/PrimarySpinner";
import SearchedBook from "./SearchedBook";
import { isAlreadyCollected } from "./helpers";
import { Typography } from "@mui/material";
import { UseMutateFunction } from "@tanstack/react-query";
import { CollectBookGridProps } from "./interfaces";

const AddBookGridUIon = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-y: scroll;
  place-items: center;
  padding: 1.6rem;
  gap: 2rem;
`;

const CollectBookGrid: React.FC<CollectBookGridProps> = ({
  collectedBooks,
  books,
  isLoading,
  addBookToCollectionMutate,
}) => {
  return (
    <>
      {isLoading ? (
        <PrimarySpinner size="3rem" />
      ) : books.length == 0 ? (
        <Typography variant="inherit">NO BOOKS TO SHOW</Typography>
      ) : (
        <AddBookGridUIon>
          {books.map((book, index) => (
            <SearchedBook
              key={index}
              book={book}
              isAlreadyCollected={isAlreadyCollected(collectedBooks, book.id)}
              addBookToCollectionMutate={addBookToCollectionMutate}
            />
          ))}
        </AddBookGridUIon>
      )}
    </>
  );
};

export default CollectBookGrid;
