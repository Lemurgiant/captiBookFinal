import TextField from "@mui/material/TextField";
import styled from "styled-components";

const PrimaryTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${({ theme }) => theme.light};
  }
  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.bg.dark};
    & fieldset {
      border-color: ${({ theme }) => theme.blant};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.light};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.primary[100]};
    }
    & input {
      color: ${({ theme }) => theme.light};
    }
  }
  & .MuiFormLabel-root {
    color: ${({ theme }) => theme.blant};
    &.Mui-focused {
      color: ${({ theme }) => theme.primary[100]};
    }
  }
`;

export default PrimaryTextField;
