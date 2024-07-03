import React from "react";
import CollectBookModalInstance from "./CollectBookModalInstance";
import { useCollectBookModal } from "./hooks/useCollectBookModal";
import useBookCollectionQueryData from "../../../hooks/queries/useBookTrackingApi";
import { CollectBookModalInstanceProps } from "./interfaces";
import { mapToBookCollection } from "../../../global/mapper";

const CollectBookModal = ({
  isShowing,
  handleClose,
}: Omit<
  CollectBookModalInstanceProps,
  | "searchInputVal"
  | "handleSearchInputChange"
  | "searchedBooks"
  | "isGridLoading"
  | "handleCollectBookMutate"
  | "collectedBooks"
  | "addBookToCollectionMutate"
>) => {
  const {
    searchTermInputVal,
    handleSearchTermInputChange,
    searchedBooks,
    isGridLoading,
    addBookToCollectionMutate,
  } = useCollectBookModal();

  const { captiBookCollectionQueryData } = useBookCollectionQueryData();
  const bookCollection = mapToBookCollection(captiBookCollectionQueryData);
  return (
    <CollectBookModalInstance
      isShowing={isShowing}
      handleClose={handleClose}
      searchInputVal={searchTermInputVal}
      handleSearchInputChange={handleSearchTermInputChange}
      searchedBooks={searchedBooks}
      isGridLoading={isGridLoading}
      addBookToCollectionMutate={addBookToCollectionMutate}
      collectedBooks={bookCollection}
    />
  );
};

export default CollectBookModal;
