import useSelectableBook from "../pure/useSelectableBook";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";
import { useBookInsightsPageContext } from "../../pages/BookInsightsPage/BookInsightsPage";
import { ObjectId } from "mongodb";

const useBookDetailsSummary = () => {
  const {
    selectedBook,
    handleSelectBookId: rawHandleSelectBookId,
  } = useBookInsightsPageContext(); // useContext
  const {
    isSelectingBookModalOpen,
    handleIsSelectingBookModalOpen,
    handleIsSelectingBookModalClose,
  } = useSelectableBook();

  const {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
  } = useBookTrackingApi();
  const bookTitle = selectedBook?.book.title ?? "--";
  const bookAuthors = selectedBook?.book.authors.join(",") ?? "--";
  const bookImageURL = selectedBook?.book.imageURL ?? "";
  return {
    modalState: {
      isSelectingBookModalOpen,
      handleIsSelectingBookModalOpen,
      handleIsSelectingBookModalClose,
    },
    selectedBookState: {
      bookTitle,
      bookAuthors,
      bookImageURL,
      handleSelectBookId: (bookId: ObjectId) => {
        rawHandleSelectBookId(bookId);
        handleIsSelectingBookModalClose();
      },
    },
    bookTrackingData: {
      captiBookCollectionQueryData,
      isCaptiBookCollectionQueryLoading,
    },
  };
};

export default useBookDetailsSummary;
