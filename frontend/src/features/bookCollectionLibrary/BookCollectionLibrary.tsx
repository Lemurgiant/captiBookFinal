import React from "react";
import BookCollectionLibraryInstance from "./BookCollectionLibraryInstance";
import useBookCollectionLibrary from "./hooks/useBookCollectionLibrary";
import { BookCollectionLibraryProps } from "./interface";

const BookCollectionLibrary: React.FC<Omit<
  BookCollectionLibraryProps,
  | "bookTrackingCollection"
  | "isLoading"
  | "handleDeleteBook"
  | "isConfirmDeleteModalOpen"
  | "handleOpenConfirmDeleteModal"
  | "handleCloseConfirmDeleteModal"
  | "isDeleteBookMutatePending"
>> = (props) => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
    handleDeleteBook,
    isConfirmDeleteModalOpen,
    handleOpenConfirmDeleteModal,
    handleCloseConfirmDeleteModal,
    isDeleteBookMutatePending,
  } = useBookCollectionLibrary();

  return (
    <BookCollectionLibraryInstance
      bookTrackingCollection={captiBookCollectionQueryData ?? []}
      isLoading={isCaptiBookCollectionQueryLoading}
      handleDeleteBook={handleDeleteBook}
      isConfirmDeleteModalOpen={isConfirmDeleteModalOpen}
      handleOpenConfirmDeleteModal={handleOpenConfirmDeleteModal}
      handleCloseConfirmDeleteModal={handleCloseConfirmDeleteModal}
      isDeleteBookMutatePending={isDeleteBookMutatePending}
      {...props}
    />
  );
};

export default BookCollectionLibrary;
