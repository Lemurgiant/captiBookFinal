import styled from "styled-components";
import { CaptiBookData } from "../../interfaces/globalState";
import PrimarySpinner from "../../components/PrimarySpinner";
import SubheaderUI from "../../components/SubheaderUI";
import HoverableBook, { BUTTON_SHADOWS } from "./HoverableBook";
import { Box } from "@mui/material";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import { ObjectId } from "mongodb";

const LibraryGridWrapper = styled.div`
  width: 44rem;
  height: 30rem;
  border: 1px solid #727272;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LibraryGridUIon = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-y: scroll;
  place-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;

interface CollectedBooksGridProps {
  captiBookDataCollection: CaptiBookData[];
  isLoading: boolean;
  handleSelectBookId: (bookId: ObjectId) => void;
}

const CollectedBooksGridPure: React.FC<CollectedBooksGridProps> = ({
  captiBookDataCollection,
  isLoading,
  handleSelectBookId,
}) => {
  if (isLoading) {
    return (
      <LibraryGridWrapper>
        <PrimarySpinner size="5rem" />
      </LibraryGridWrapper>
    );
  }

  if (!captiBookDataCollection || captiBookDataCollection.length === 0) {
    return (
      <LibraryGridWrapper>
        <SubheaderUI>NOTHING TO SHOW</SubheaderUI>
      </LibraryGridWrapper>
    );
  }

  return (
    <LibraryGridWrapper>
      <LibraryGridUIon>
        {captiBookDataCollection.map(
          (captiBookData: CaptiBookData, index: number) => (
            <HoverableBook
              bookImageURL={captiBookData.book.imageURL}
              onHoverChildren={
                <Box style={BUTTON_SHADOWS} borderRadius={"0.4rem"}>
                  <PrimaryButtonUI
                    onClick={() => {
                      handleSelectBookId(captiBookData._id);
                    }}
                  >
                    SELECT
                  </PrimaryButtonUI>
                </Box>
              }
            />
          )
        )}
      </LibraryGridUIon>
    </LibraryGridWrapper>
  );
};

export default CollectedBooksGridPure;
