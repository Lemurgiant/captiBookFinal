import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PrimaryTextAreaInputUI from "../PrimaryTextareaInputUI";

interface PrimaryModalTextfieldStackProps {
  label: string;
  isVertical?: boolean;
  textareaRef?: React.Ref<HTMLTextAreaElement>; // Define inputRef as a prop
  [key: string]: any; // Allow any other props
}

export default function PrimaryModalTextfieldStack({
  label,
  isVertical = false,
  textareaRef,
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
          <PrimaryTextAreaInputUI {...props} ref={textareaRef} />
        </Stack>
      ) : (
        <Stack direction="row" width="100%" alignItems={"center"} gap="1rem">
          <Typography variant="inherit" fontSize="14px" width="14rem">
            {label}
          </Typography>
          <PrimaryTextAreaInputUI {...props} ref={textareaRef} />
        </Stack>
      )}
    </>
  );
}
