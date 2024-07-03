import styled from "styled-components";
import PrimarySpinner from "../../components/PrimarySpinner";
import CollectedBook from "./CollectedBook";
import { LibraryGridProps } from "./interface";
import ConfirmDeleteModal from "../../components/Modals/ConfirmDeleteModal";
import { CaptiBookData } from "../../interfaces/globalState";
import { Typography } from "@mui/material";

const LibraryGridWrapper = styled.div`
  width: 57rem;
  height: 27rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.blant};
`;

const LibraryGridUIon = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-y: scroll;
  place-items: center;
  padding: 1.6rem;
  gap: 2rem;
  box-sizing: border-box;
`;

export default function LibraryGrid({
  bookTrackingCollection,
  isLoading,
  handleDeleteBook,
  handleCloseConfirmDeleteModal,
  handleOpenConfirmDeleteModal,
  isConfirmDeleteModalOpen,
  isDeleteBookMutatePending,
}: LibraryGridProps) {
  if (isLoading) {
    return (
      <LibraryGridWrapper>
        <PrimarySpinner size="5rem" />
      </LibraryGridWrapper>
    );
  }

  if (!bookTrackingCollection || bookTrackingCollection.length === 0) {
    return (
      <LibraryGridWrapper>
        <Typography variant="inherit" fontSize={"34px"} fontWeight={600}>
          NO BOOKS ADDED YET
        </Typography>
      </LibraryGridWrapper>
    );
  }

  return (
    <LibraryGridWrapper>
      <LibraryGridUIon>
        {bookTrackingCollection.map(
          (bookTrackingData: CaptiBookData, index: number) => (
            <CollectedBook
              key={index}
              book={bookTrackingData.book}
              bookTrackingId={bookTrackingData._id}
              handleDeleteBook={handleDeleteBook}
              isConfirmDeleteModalOpen={isConfirmDeleteModalOpen}
              handleCloseConfirmDeleteModal={handleCloseConfirmDeleteModal}
              handleOpenConfirmDeleteModal={handleOpenConfirmDeleteModal}
              isDeleteBookMutatePending={isDeleteBookMutatePending}
            />
          )
        )}
        <ConfirmDeleteModal
          isShowing={isConfirmDeleteModalOpen}
          handleClose={handleCloseConfirmDeleteModal}
          handleDelete={handleDeleteBook}
          isPendingDelete={isDeleteBookMutatePending}
        />
      </LibraryGridUIon>
    </LibraryGridWrapper>
  );
}
