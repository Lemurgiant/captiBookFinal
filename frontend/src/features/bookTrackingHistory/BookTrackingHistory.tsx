import BookTrackingHistoryInstance from "./BookTrackingHistoryInstance";
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
