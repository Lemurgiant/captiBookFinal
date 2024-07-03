import React from "react";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import { CheckMarkIconUI } from "../../../components/Icons";
import { useTheme } from "styled-components";
import PrimarySpinner from "../../../components/PrimarySpinner";

interface SaveContentButtonProps {
  handleSaveChanges: () => void;
  isDisabled: boolean;
  isPending: boolean;
}

const SaveContentButton: React.FC<SaveContentButtonProps> = ({
  handleSaveChanges,
  isDisabled,
  isPending,
}) => {
  const theme = useTheme();

  return (
    <PrimaryButtonUI
      style={{ gap: "0.4rem" }}
      bgcolor={theme.success[200]}
      bgcolorActive={theme.success[300]}
      onClick={isDisabled || isPending ? undefined : handleSaveChanges}
      isDisabled={isDisabled || isPending}
    >
      {isPending ? (
        <PrimarySpinner />
      ) : (
        <>
          <CheckMarkIconUI size={22} />
          SAVE CHANGES
        </>
      )}
    </PrimaryButtonUI>
  );
};

export default SaveContentButton;
