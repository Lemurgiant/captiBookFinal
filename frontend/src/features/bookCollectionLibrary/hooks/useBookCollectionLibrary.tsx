import useBookTrackingQueryData from "../../../hooks/queries/useBookTrackingApi";
import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import { mapToBookCollection } from "../../../global/mapper";

const useBookCollectionLibrary = () => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
    deleteBookMutate,
    isDeleteBookMutatePending,
    isDeleteBookMutateSuccess,
  } = useBookTrackingQueryData();
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(
    false
  );
  const [bookIdToDelete, setBookIdToDelete] = useState<ObjectId | null>(null);
  const handleOpenConfirmDeleteModal = (bookId: ObjectId) => {
    setBookIdToDelete(bookId);
    setIsConfirmDeleteModalOpen(true);
  };
  const handleCloseConfirmDeleteModal = () => {
    setIsConfirmDeleteModalOpen(false);
  };

  const handleDeleteBook = () => {
    deleteBookMutate(bookIdToDelete!);
  };

  useEffect(() => {
    if (isDeleteBookMutateSuccess) {
      setIsConfirmDeleteModalOpen(false);
    }
  }, [isDeleteBookMutateSuccess]);

  return {
    captiBookCollectionQueryData,
    bookCollection: mapToBookCollection(captiBookCollectionQueryData),
    isCaptiBookCollectionQueryLoading,
    handleDeleteBook,
    isConfirmDeleteModalOpen,
    handleOpenConfirmDeleteModal,
    handleCloseConfirmDeleteModal,
    isDeleteBookMutatePending,
  };
};

export default useBookCollectionLibrary;
