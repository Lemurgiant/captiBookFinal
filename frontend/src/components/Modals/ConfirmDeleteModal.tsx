import PrimaryModalUI from "../PrimaryModal/PrimaryModalUI";
import Stack from "@mui/material/Stack";
import PrimarySquareButtonUI from "../PrimarySquareButtonUI";
import { CheckMarkIconUI, CrossMarkIconUI } from "../Icons";
import { useTheme } from "styled-components";
import PrimarySpinner from "../PrimarySpinner";

interface ConfirmDeleteProps {
  isShowing: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  isPendingDelete: boolean;
}

export default function ConfirmDeleteModal({
  isShowing,
  handleClose,
  handleDelete,
  isPendingDelete,
}: ConfirmDeleteProps) {
  const theme = useTheme();
  return (
    <PrimaryModalUI
      isShowing={isShowing}
      head="CONFIRM DELETE"
      hasXButton={false}
      height={"12rem"}
      width={"22rem"}
    >
      <Stack direction="row" gap="2rem" mt="0.3rem">
        <PrimarySquareButtonUI
          bgcolor={theme.error[100]}
          bgcolorActive={theme.error[200]}
          size="4rem"
          onClick={handleClose}
        >
          <CrossMarkIconUI size={50} />
        </PrimarySquareButtonUI>
        <PrimarySquareButtonUI
          size="4rem"
          onClick={isPendingDelete ? undefined : handleDelete}
        >
          {isPendingDelete ? <PrimarySpinner /> : <CheckMarkIconUI size={50} />}
        </PrimarySquareButtonUI>
      </Stack>
    </PrimaryModalUI>
  );
}
