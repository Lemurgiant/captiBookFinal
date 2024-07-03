import React from "react";
import SelectableBook from "../../components/featured/SelectableBook";
import SelectBookModalPure from "../pure/SelectBookModalPure";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import styled from "styled-components";
import BookDetailsSectionRow from "./components/BookDetailsSectionRow";
import useBookDetailsSummary from "./useBookDetailsSummary";

const BookDetailsSummaryInstanceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 3rem;
  align-items: center;
`;

const BookDetailsSection = styled(PrimaryFrameUI)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const BookDetailsSummaryInstance: React.FC = () => {
  const {
    modalState: {
      isSelectingBookModalOpen,
      handleIsSelectingBookModalOpen,
      handleIsSelectingBookModalClose,
    },
    selectedBookState: {
      bookTitle,
      bookAuthors,
      bookImageURL,
      handleSelectBookId,
    },
    bookTrackingData: {
      captiBookCollectionQueryData,
      isCaptiBookCollectionQueryLoading,
    },
  } = useBookDetailsSummary();

  return (
    <>
      <BookDetailsSummaryInstanceWrapper>
        <SelectableBook
          handleIsSelectingBookModalOpen={handleIsSelectingBookModalOpen}
          bookImageURL={bookImageURL}
        />
        <BookDetailsSection>
          <BookDetailsSectionRow category="Title" details={bookTitle} />
          <BookDetailsSectionRow category="Authors" details={bookAuthors} />
        </BookDetailsSection>
      </BookDetailsSummaryInstanceWrapper>
      <SelectBookModalPure
        isSelectingBookModalOpen={isSelectingBookModalOpen}
        handleIsSelectingBookModalClose={handleIsSelectingBookModalClose}
        handleSelectBookId={handleSelectBookId}
        captiBookCollectionQueryData={captiBookCollectionQueryData}
        isCaptiBookCollectionQueryLoading={isCaptiBookCollectionQueryLoading}
      />
    </>
  );
};

export default BookDetailsSummaryInstance;
