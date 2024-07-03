import { ObjectId } from "mongodb";
import { CaptiBookData } from "../../interfaces/globalState";

export interface useBookInsightsPageProps {
  selectedBookId: ObjectId | null;
  handleSelectBookId: (bookId: ObjectId) => void;
  selectedBook: CaptiBookData | null;
}

export const useBookInsightsPageContextInit: useBookInsightsPageProps = {
  selectedBookId: null,
  handleSelectBookId: () => {},
  selectedBook: null,
};
