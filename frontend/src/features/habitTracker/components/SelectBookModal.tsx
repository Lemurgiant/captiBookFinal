import useBookTrackingApi from "../../../hooks/queries/useBookTrackingApi";
import { useHabitTrackerContext } from "../HabitTrackerInstance";
import SelectBookModalPure from "../../pure/SelectBookModalPure";

const SelectBookModal = () => {
  const {
    isSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
    handleSelectBookId,
  } = useHabitTrackerContext();
  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
  } = useBookTrackingApi();
  return (
    <SelectBookModalPure
      isSelectingBookModalOpen={isSelectingBookModalOpen}
      handleIsSelectingBookModalClose={handleIsSelectingBookModalClose}
      handleSelectBookId={handleSelectBookId}
      captiBookCollectionQueryData={captiBookCollectionQueryData}
      isCaptiBookCollectionQueryLoading={isCaptiBookCollectionQueryLoading}
    />
  );
};

export default SelectBookModal;
