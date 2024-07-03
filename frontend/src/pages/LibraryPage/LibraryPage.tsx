import BookCollectionLibrary from "../../features/bookCollectionLibrary";
import AddBookButton from "./AddBookButton";
import useLibraryPage from "./useLibraryPage";
import CollectBookModal from "../../features/modals/collectBookModal";

const LibraryPage = () => {
  const {
    isAddBookModalOpen,
    handleAddBookModalOpen,
    handleAddBookModalClose,
  } = useLibraryPage();
  return (
    <>
      <BookCollectionLibrary
        toolbarChildren={<AddBookButton onClick={handleAddBookModalOpen} />}
      />
      <CollectBookModal
        isShowing={isAddBookModalOpen}
        handleClose={handleAddBookModalClose}
      />
    </>
  );
};

export default LibraryPage;
