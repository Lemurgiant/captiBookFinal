import { Stack, Typography } from "@mui/material";
import PrimaryTextAreaInputUI from "../../../components/PrimaryTextareaInputUI";

interface PrimaryModalTextfieldStackProps {
  label: string;
  isVertical?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaRef?: React.Ref<HTMLTextAreaElement>; // Define inputRef as a prop
  [key: string]: any; // Allow any other props
}

export default function AddItemModalInputPack({
  label,
  isVertical = false,
  textareaRef,
  value,
  onChange,
  ...props
}: PrimaryModalTextfieldStackProps) {
  return (
    <>
      {isVertical ? (
        <Stack width="100%" gap="0.3rem">
          <Typography
            variant="inherit"
            fontSize="14px"
            width="14rem"
            ml="0.7rem"
          >
            {label}
          </Typography>
          <PrimaryTextAreaInputUI
            value={value}
            onChange={onChange}
            ref={textareaRef}
            style={{ userSelect: "none" }}
            {...props}
          />
        </Stack>
      ) : (
        <Stack direction="row" width="100%" alignItems={"center"} gap="1rem">
          <Typography variant="inherit" fontSize="14px" width="14rem">
            {label}
          </Typography>
          <PrimaryTextAreaInputUI
            value={value}
            onChange={onChange}
            {...props}
            ref={textareaRef}
            style={{ userSelect: "none" }}
          />
        </Stack>
      )}
    </>
  );
}
