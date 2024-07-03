import { InputLabel, Select, SelectProps } from "@mui/material";
import styled from "styled-components";

export const StyledInput = styled(InputLabel)`
  && {
    color: ${({ theme }) => theme.light};
    &.Mui-focused {
      color: ${({ theme }) => theme.primary[100]};
    }
  }
`;

export const StyledSelect = styled(Select)<SelectProps<string>>`
  && {
    color: white; // General text color
    &.MuiFormLabel-root .MuiInputLabel-root {
      color: white;
    }
    &.Mui-focused {
      color: "red"; // Adjust focused label color
    }
    &.MuiOutlinedInput-root {
      color: white;
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: white;
      }
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.primary[100]};
      }
    }
    & fieldset {
      border-color: white;
    }
    & .MuiSelect-icon {
      color: white;
    }
  }
`;
