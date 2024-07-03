import { useTheme } from "styled-components";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import AddItemModalInputPack from "./AddItemModalInputPack";
import { useEffect, useRef } from "react";
import PrimaryModalUI from "../../../components/PrimaryModal/PrimaryModalUI";
import { Stack } from "@mui/material";
import { capitalizeFirstLetter, isEmptyString } from "../../helper";
import { useInsightsManagementContext } from "../InsightsManagementInstance";
import PrimarySpinner from "../../../components/PrimarySpinner";
import { InsightsManagementTabVal } from "../interface";

interface AddItemModalProps {
  isShowing: boolean;
  handleClose: () => void;
}

interface SaveButtonProps {
  label: string;
  handleAddItem: () => void;
  isPending: boolean;
  isDisabled: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  label,
  handleAddItem,
  isPending,
  isDisabled,
}) => {
  const theme = useTheme();
  return (
    <PrimaryButtonUI
      bgcolor={theme.success[200]}
      bgcolorActive={theme.success[300]}
      onClick={isDisabled ? undefined : handleAddItem}
      isDisabled={isDisabled}
    >
      {isPending ? <PrimarySpinner /> : label}
    </PrimaryButtonUI>
  );
};

const InputPackStack = () => {
  const {
    tabVal,
    addItemModalState: { inputValues, inputChangeHandlers, inputRefs },
  } = useInsightsManagementContext();
  const primaryLabel = `Add ${capitalizeFirstLetter(tabVal)}:`;
  const primaryPlaceholder = `Enter ${capitalizeFirstLetter(tabVal)}...`;
  return (
    <>
      {tabVal === "summary" ? (
        <>
          <AddItemModalInputPack
            label={primaryLabel}
            isVertical={true}
            minRows={16}
            maxRows={16}
            placeholder={primaryPlaceholder}
            value={inputValues.summary ?? ""}
            onChange={inputChangeHandlers.summary}
            textareaRef={inputRefs.summary}
          />
          <AddItemModalInputPack
            label="Reference (optional):"
            minRows={2}
            maxRows={2}
            placeholder="eg Chapter"
            value={inputValues.summaryReference ?? ""}
            onChange={inputChangeHandlers.summaryReference}
          />
        </>
      ) : tabVal === "term" ? (
        <>
          <AddItemModalInputPack
            label={primaryLabel}
            isVertical={false}
            minRows={16}
            maxRows={1}
            placeholder={primaryPlaceholder}
            value={inputValues.term ?? ""}
            onChange={inputChangeHandlers.term}
            textareaRef={inputRefs.term}
          />
          <AddItemModalInputPack
            label="Definition (optional):"
            minRows={8}
            maxRows={8}
            placeholder="eg Chapter"
            value={inputValues.definition ?? ""}
            onChange={inputChangeHandlers.definition}
          />
        </>
      ) : (
        <>
          <AddItemModalInputPack
            label={primaryLabel}
            isVertical={true}
            minRows={7}
            maxRows={7}
            placeholder={primaryPlaceholder}
            value={inputValues.quote ?? ""}
            onChange={inputChangeHandlers.quote}
            textareaRef={inputRefs.quote}
          />
          <AddItemModalInputPack
            label="Reference (optional):"
            minRows={2}
            maxRows={2}
            placeholder="eg Chapter"
            value={inputValues.quoteReference ?? ""}
            onChange={inputChangeHandlers.quoteReference}
          />
        </>
      )}
    </>
  );
};

export function AddItemModal() {
  const {
    inputValues,
    addItemModalState: {
      isOpen,
      handleClose,
      inputRefs,
      inputChangeHandlers,
      mutateHandlers,
    },
  } = useInsightsManagementContext();
  const { tabVal } = useInsightsManagementContext();
  const head = `ADD ${tabVal.toUpperCase()}`;
  return (
    <PrimaryModalUI
      isShowing={isOpen}
      handleClose={handleClose}
      height={"fit-content"}
      width="40rem"
      head={head}
    >
      <Stack gap="2rem" width="100%" alignItems={"center"} pb="1rem">
        <InputPackStack />
        <SaveButton
          label={head}
          handleAddItem={mutateHandlers.fn}
          isPending={mutateHandlers.isPending}
          isDisabled={mutateHandlers.isDisabled}
        />
      </Stack>
    </PrimaryModalUI>
  );
}
