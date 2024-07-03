import React from "react";
import BookTrackingHistoryInstance from "./BookTrackingHistoryInstance";
import useProductivityApi from "../../hooks/queries/useProductivityApi";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";
import useBookTrackingHistory from "./useBookTrackingHistory";
import { sortSessionCollectionByLatest } from "../helper";

const BookTrackingHistory = () => {
  const {
    sessionCollection,
    isSessionCollectionLoading,
  } = useBookTrackingHistory();
  const sortedSessionCollection = sessionCollection
    ? sortSessionCollectionByLatest(sessionCollection)
    : [];

  return (
    <BookTrackingHistoryInstance
      sessionCollection={sortedSessionCollection}
      isLoading={isSessionCollectionLoading}
    />
  );
};

export default BookTrackingHistory;
