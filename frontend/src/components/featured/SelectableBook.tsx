import { CgArrowsExchange } from "react-icons/cg";
import HoverableBook from "../../features/pure/HoverableBook";
import PrimaryTinyButtonUI from "../PrimaryTinyButtonUI";

interface AsideBookPreviewProps {
  handleIsSelectingBookModalOpen: () => void;
  bookImageURL: string;
}

const SelectableBook: React.FC<AsideBookPreviewProps> = ({
  handleIsSelectingBookModalOpen,
  bookImageURL,
}) => {
  return (
    <HoverableBook
      onHoverChildren={
        <PrimaryTinyButtonUI onClick={handleIsSelectingBookModalOpen}>
          <CgArrowsExchange size={30} />
        </PrimaryTinyButtonUI>
      }
      bookImageURL={bookImageURL}
    />
  );
};

export default SelectableBook;
