import React, { useEffect, useState } from "react";
import { CaptiBookData } from "../../interfaces/globalState";
import { ObjectId } from "mongodb";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";

const useBookInsightsPage = () => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQuerySuccess,
  } = useBookTrackingApi();

  const [selectedBookId, setSelectedBookId] = useState<ObjectId | null>(() => {
    const storedBookId = localStorage.getItem("insights_sbid");
    return storedBookId ? JSON.parse(storedBookId) : null;
  });

  const handleSelectBookId = (bookId: ObjectId) => {
    setSelectedBookId(bookId);
    localStorage.setItem("insights_sbid", JSON.stringify(bookId));
  };

  const [selectedBook, setSelectedBook] = useState<CaptiBookData | null>(null);

  useEffect(() => {
    if (selectedBookId && isCaptiBookCollectionQuerySuccess) {
      const book = captiBookCollectionQueryData.find(
        (book) => book._id === selectedBookId
      );
      if (!book && selectedBookId) {
        localStorage.removeItem("insights_sbid");
      }
      setSelectedBook(book ?? null);
    }
  }, [selectedBookId, captiBookCollectionQueryData]);

  return {
    selectedBookId,
    handleSelectBookId,
    selectedBook,
  };
};

export default useBookInsightsPage;
