import { ObjectId } from "mongodb";
import PrimaryModalUI from "../../components/PrimaryModal/PrimaryModalUI";
import { CaptiBookData } from "../../interfaces/globalState";
import CollectedBooksGridPure from "./CollectedBooksGridPure";

interface SelectBookModalPureProps {
  isSelectingBookModalOpen: boolean;
  handleIsSelectingBookModalClose: () => void;
  handleSelectBookId: (bookId: ObjectId) => void;
  captiBookCollectionQueryData: CaptiBookData[];
  isCaptiBookCollectionQueryLoading: boolean;
}

const SelectBookModalPure: React.FC<SelectBookModalPureProps> = ({
  isSelectingBookModalOpen,
  handleIsSelectingBookModalClose,
  handleSelectBookId,
  captiBookCollectionQueryData,
  isCaptiBookCollectionQueryLoading,
}) => {
  return (
    <PrimaryModalUI
      isShowing={isSelectingBookModalOpen}
      head="SELECT A BOOK"
      handleClose={handleIsSelectingBookModalClose}
      width="50rem"
      height="38rem"
    >
      <CollectedBooksGridPure
        captiBookDataCollection={captiBookCollectionQueryData || []}
        isLoading={isCaptiBookCollectionQueryLoading}
        handleSelectBookId={handleSelectBookId}
      />
    </PrimaryModalUI>
  );
};

export default SelectBookModalPure;
