import { useState } from "react";

const useLibraryPage = () => {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const handleAddBookModalOpen = () => setIsAddBookModalOpen(true);
  const handleAddBookModalClose = () => setIsAddBookModalOpen(false);
  return {
    isAddBookModalOpen,
    handleAddBookModalOpen,
    handleAddBookModalClose,
  };
};

export default useLibraryPage;
