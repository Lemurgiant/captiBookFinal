import React from "react";
import { ObjectId } from "mongodb";
import { Book, CaptiBookData } from "../../interfaces/globalState";

export interface LibraryGridProps {
  bookTrackingCollection: CaptiBookData[];
  isLoading: boolean;
  handleOpenConfirmDeleteModal: (bookId: ObjectId) => void;
  isConfirmDeleteModalOpen: boolean;
  handleCloseConfirmDeleteModal: () => void;
  handleDeleteBook: () => void;
  isDeleteBookMutatePending: boolean;
}

export interface BookCollectionLibraryProps extends LibraryGridProps {
  toolbarChildren?: React.ReactNode;
}

export interface CollectedBookUIProps {
  book: Book;
  handleOpenConfirmDeleteModal: (bookId: ObjectId) => void;
  bookTrackingId: ObjectId;
  isConfirmDeleteModalOpen: boolean;
  handleCloseConfirmDeleteModal: () => void;
  handleDeleteBook: () => void;
  isDeleteBookMutatePending: boolean;
}
