import { Stack } from "@mui/material";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import { BookIconUI } from "../../components/Icons";

interface AddBookButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AddBookButton(props: AddBookButtonProps) {
  return (
    <PrimaryButtonUI style={{ padding: "1.6rem 3rem" }} {...props}>
      <Stack direction="row" gap="0.6rem" alignItems={"center"}>
        <BookIconUI size={18} />
        ADD BOOK
      </Stack>
    </PrimaryButtonUI>
  );
}
