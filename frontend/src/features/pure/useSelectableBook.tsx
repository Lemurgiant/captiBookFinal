import React, { useEffect, useState } from "react";
import { CaptiBookData } from "../../interfaces/globalState";
import { ObjectId } from "mongodb";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";

const useSelectableBook = () => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQuerySuccess,
  } = useBookTrackingApi();
  const [selectedBookId, setSelectedBookId] = useState<ObjectId | null>(() => {
    const storedBookId = localStorage.getItem("tracker_sbid");
    return storedBookId ? JSON.parse(storedBookId) : null;
  });

  const handleSelectBookId = (bookId: ObjectId) => {
    setSelectedBookId(bookId);
    localStorage.setItem("tracker_sbid", JSON.stringify(bookId));
    handleIsSelectingBookModalClose();
  };

  const [selectedBook, setSelectedBook] = useState<CaptiBookData | null>(null);

  useEffect(() => {
    if (selectedBookId && isCaptiBookCollectionQuerySuccess) {
      const book = captiBookCollectionQueryData.find(
        (book) => book._id === selectedBookId
      );
      if (!book) {
        localStorage.removeItem("tracker_sbid");
        setSelectedBookId(null);
        setSelectedBook(null);
      } else {
        setSelectedBook(book);
      }
    }
  }, [selectedBookId, captiBookCollectionQueryData]);

  const [isSelectingBookModalOpen, setIsSelectingBookModalOpen] = useState(
    false
  );
  const handleIsSelectingBookModalOpen = () =>
    setIsSelectingBookModalOpen(true);
  const handleIsSelectingBookModalClose = () =>
    setIsSelectingBookModalOpen(false);
  return {
    isSelectingBookModalOpen,
    handleIsSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
    selectedBook,
    handleSelectBookId,
    selectedBookId,
  };
};

export default useSelectableBook;
