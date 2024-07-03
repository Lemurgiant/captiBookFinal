import React from "react";
import PrimaryModalUI from "../../../components/PrimaryModal/PrimaryModalUI";
import { useHabitTrackerProps } from "../interface";
import useBookTrackingApi from "../../../hooks/queries/useBookTrackingApi";
import { CaptiBookData } from "../../../interfaces/globalState";
import useHabitTracker from "../hooks/useHabitTracker";
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
