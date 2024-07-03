import styled from "styled-components";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

const PrimaryTextAreaInputUI = styled(BaseTextareaAutosize)`
  resize: none;
  box-sizing: border-box;
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.light};
  background: ${({ theme }) => theme.mainGradient};
  border: 1px solid ${({ theme }) => theme.blant};
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.23);
  font-family: inherit;

  &:hover {
    border-color: ${({ theme }) => theme.light};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`;
export default PrimaryTextAreaInputUI;
