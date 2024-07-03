import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SelectableBook from "../../components/featured/SelectableBook";
import useSelectableBook from "../pure/useSelectableBook";
import SelectBookModalPure from "../pure/SelectBookModalPure";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import styled from "styled-components";
import DividerUI from "../../components/DividerUI";
import BookDetailsSectionRow from "./components/BookDetailsSectionRow";
import useBookDetailsSummary from "./useBookDetailsSummary";
import { CaptiBookData } from "../../interfaces/globalState";

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
