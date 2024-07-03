import { Stack } from "@mui/material";
import PrimaryModalUI from "../../../components/PrimaryModal/PrimaryModalUI";
import PrimarySearchInput from "../../../components/PrimarySearchInput";
import AddBookGrid from "./CollectBookGrid";
import styled from "styled-components";
import { Book } from "../../interface";
import { UseMutateFunction } from "@tanstack/react-query";
import { CollectBookModalInstanceProps } from "./interfaces";

const AddBookGridSectionUI = styled.div`
  width: 100%;
  height: 22rem;
  border: 1px solid #727272;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 1.3rem 0;
  justify-content: center;
`;

function CollectBookModalInstance({
  isShowing,
  handleClose,
  searchInputVal,
  handleSearchInputChange,
  searchedBooks,
  isGridLoading,
  addBookToCollectionMutate,
  collectedBooks,
}: CollectBookModalInstanceProps) {
  return (
    <PrimaryModalUI
      isShowing={isShowing}
      head="ADD BOOK"
      handleClose={handleClose}
      height="36rem"
      width="45rem"
    >
      <Stack alignItems={"flex-start"} width="100%" gap="0.4rem" mt="0.6rem">
        <PrimarySearchInput
          placeholder="Search for book..."
          value={searchInputVal}
          onChange={handleSearchInputChange}
        />
        <AddBookGridSectionUI>
          <AddBookGrid
            books={searchedBooks}
            isLoading={isGridLoading}
            collectedBooks={collectedBooks}
            addBookToCollectionMutate={addBookToCollectionMutate}
          />
        </AddBookGridSectionUI>
      </Stack>
    </PrimaryModalUI>
  );
}

export default CollectBookModalInstance;
