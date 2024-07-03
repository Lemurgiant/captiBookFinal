import BookTrackingGraphInstance from "./components/BookTrackingGraphInstance";
import useBookTrackingBarWithData from "./hooks/useBookTrackingBarWithData";
import BookTrackingGraphSelect from "./components/BookTrackingGraphSelect";

const BookTrackingGraph = () => {
  const {
    bookTrackingBarDatum,
    bookTrackingBarDisplay,
    isCaptiBookCollectionQueryLoading,
    isBookCollectionQueryDataEmpty,
    bookTrackingGraphFilterVal,
    handleBookTrackingGraphFilterChange,
  } = useBookTrackingBarWithData();
  return (
    <BookTrackingGraphInstance
      barDatum={bookTrackingBarDatum}
      barDatumDisplay={bookTrackingBarDisplay}
      isLoading={isCaptiBookCollectionQueryLoading}
      isEmpty={isBookCollectionQueryDataEmpty}
    >
      <BookTrackingGraphSelect
        value={bookTrackingGraphFilterVal}
        onChange={handleBookTrackingGraphFilterChange}
      />
    </BookTrackingGraphInstance>
  );
};

export default BookTrackingGraph;
