import styled from "styled-components";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import DividerUI from "../../components/DividerUI";
import LibraryGrid from "./LibraryGrid";
import { BookCollectionLibraryProps } from "./interface";

const LibraryPageUion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainLibraryUIon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ToolbarSectionUIon = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
  align-items: center;
`;

const LibraryGridSectionUIon = styled.div`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BookCollectionLibraryInstance({
  bookTrackingCollection,
  isLoading,
  toolbarChildren,
  handleDeleteBook,
  isConfirmDeleteModalOpen,
  handleCloseConfirmDeleteModal,
  handleOpenConfirmDeleteModal,
  isDeleteBookMutatePending,
}: BookCollectionLibraryProps) {
  return (
    <LibraryPageUion>
      <PrimaryFrameUI width="62rem" height="38rem">
        <MainLibraryUIon>
          <ToolbarSectionUIon>{toolbarChildren}</ToolbarSectionUIon>
          <DividerUI />
          <LibraryGridSectionUIon>
            <LibraryGrid
              bookTrackingCollection={bookTrackingCollection}
              isLoading={isLoading}
              handleOpenConfirmDeleteModal={handleOpenConfirmDeleteModal}
              handleCloseConfirmDeleteModal={handleCloseConfirmDeleteModal}
              handleDeleteBook={handleDeleteBook}
              isConfirmDeleteModalOpen={isConfirmDeleteModalOpen}
              isDeleteBookMutatePending={isDeleteBookMutatePending}
            />
          </LibraryGridSectionUIon>
        </MainLibraryUIon>
      </PrimaryFrameUI>
    </LibraryPageUion>
  );
}

export default BookCollectionLibraryInstance;
