import TextField, { TextFieldProps } from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

// Styled components
const StyledTextField = styled(TextField)`
  input {
    padding-left: 2.8rem;
  }
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.light};
    fieldset {
      border-color: ${({ theme }) => theme.blant};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.light};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.primary[100]};
    }
  }
`;

const IconContainer = styled(Box)`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
`;

export default function PrimarySearchInput({
  placeholder,
  ...props
}: TextFieldProps) {
  return (
    <Box position="relative">
      <StyledTextField
        fullWidth
        size="small"
        placeholder={placeholder}
        {...props}
      />
      <IconContainer>
        <FiSearch size={22} />
      </IconContainer>
    </Box>
  );
}
