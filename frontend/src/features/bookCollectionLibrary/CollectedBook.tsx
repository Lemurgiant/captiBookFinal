import styled from "styled-components";
import { DeleteIconUI } from "../../components/Icons";
import PrimaryTinyButtonUI from "../../components/PrimaryTinyButtonUI";
import HoverableBook, { BUTTON_SHADOWS } from "../pure/HoverableBook";
import { CollectedBookUIProps } from "./interface";

const CollectionBookUIOverlayChildrenUI = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  justify-content: flex-end;
  display: flex;
`;

const DeleteButtonShadower = styled.div`
  border-radius: 0.4rem;
  width: max-content;
  height: max-content;
`;

export default function CollectedBook({
  book,
  handleOpenConfirmDeleteModal,
  bookTrackingId,
}: CollectedBookUIProps) {
  return (
    <>
      <HoverableBook
        bookImageURL={book.imageURL}
        onHoverChildren={
          <CollectionBookUIOverlayChildrenUI>
            <DeleteButtonShadower style={BUTTON_SHADOWS}>
              <PrimaryTinyButtonUI
                onClick={() => handleOpenConfirmDeleteModal(bookTrackingId)}
              >
                <DeleteIconUI size={26} />
              </PrimaryTinyButtonUI>
            </DeleteButtonShadower>
          </CollectionBookUIOverlayChildrenUI>
        }
      />
    </>
  );
}
