import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";
import { mapToSessionCollection } from "../../global/mapper";

const useBookTrackingHistory = () => {
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
  } = useBookTrackingApi();
  return {
    sessionCollection: mapToSessionCollection(captiBookCollectionQueryData),
    isSessionCollectionLoading: isCaptiBookCollectionQueryLoading,
  };
};

export default useBookTrackingHistory;
