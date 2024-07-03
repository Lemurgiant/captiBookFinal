import React from "react";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import { useInsightsManagementContext } from "../InsightsManagementInstance";
import { BookIconUI } from "../../../components/Icons";

const OpenAddSummaryModalButton = () => {
  const {
    tabVal,
    addItemModalState: { handleOpen, mutateHandlers },
  } = useInsightsManagementContext();
  const label = `ADD ${tabVal.toUpperCase()}`;
  return (
    <PrimaryButtonUI
      style={{ gap: "0.5rem" }}
      onClick={mutateHandlers.isDisabled ? undefined : handleOpen}
      isDisabled={mutateHandlers.isDisabled}
    >
      <BookIconUI size={20} />
      {label}
    </PrimaryButtonUI>
  );
};

export default OpenAddSummaryModalButton;
