import styled, { css } from "styled-components";
import { CiRead } from "react-icons/ci";

interface ReadButtonWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "start" | "stop";
  isDisabled: boolean;
}

const ReadButtonWrapper = styled.div<ReadButtonWrapperProps>`
  height: 2.8rem;
  padding: 0 1rem;
  background-color: ${({ theme, type, isDisabled }) =>
    isDisabled
      ? theme.disabled
      : type === "start"
      ? theme.primary[300]
      : theme.error[300]};
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  user-select: none;
  border: 1px solid transparent;
  transition: all 0.1s ease-out;
  gap: 0.6rem;
  border: 1px solid
    ${({ theme, type }) =>
      type === "start" ? theme.primary[100] : theme.error[100]};
  ${({ type, theme, isDisabled }) =>
    type === "stop" &&
    !isDisabled &&
    css`
      box-shadow: 0px 0px 8px 0px ${theme.error[200]};
      -webkit-box-shadow: 0px 0px 8px 0px ${theme.error[200]};
      -moz-box-shadow: 0px 0px 8px 0px ${theme.error[200]};
    `}
  &:hover {
    background-color: ${({ theme, type, isDisabled }) =>
      isDisabled
        ? theme.disabled
        : type === "start"
        ? theme.primary[200]
        : theme.error[200]};
  }

  &:active {
    background-color: ${({ theme, type, isDisabled }) =>
      isDisabled
        ? theme.disabled
        : type === "start"
        ? theme.primary[200]
        : theme.error[200]};
    border: ${({ isDisabled }) =>
      isDisabled ? "1px solid transparent" : "2px solid white"};
  }
`;

export default function ReadButton({
  type,
  isDisabled,
  ...props
}: ReadButtonWrapperProps) {
  return (
    <ReadButtonWrapper type={type} isDisabled={isDisabled} {...props}>
      <CiRead size={28} />
      {type === "start" ? "START READING" : "STOP READING"}
    </ReadButtonWrapper>
  );
}
