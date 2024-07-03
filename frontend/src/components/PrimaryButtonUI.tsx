import styled from "styled-components";

interface PrimaryButtonUIProps {
  bgcolor?: string;
  bgcolorActive?: string;
  isDisabled?: boolean;
}

const PrimaryButtonUI = styled.div<PrimaryButtonUIProps>`
  height: 38px;
  background-color: ${({ theme, bgcolor }) => bgcolor || theme.primary[200]};
  border-radius: 0.3rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  user-select: none;
  transition: all 0.1s ease-out;
  box-sizing: border-box;
  padding: 0 1.2rem;
  color: white;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.light} inset;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};

  &:active {
    background-color: ${({ theme, bgcolor, bgcolorActive, isDisabled }) =>
      isDisabled ? bgcolor : bgcolorActive || theme.primary[300]};
  }

  &:active {
    box-shadow: ${({ isDisabled }) =>
        isDisabled ? "0px 0px 0px 0px" : "0px 0px 0px 2px"}
      ${({ theme }) => theme.light} inset;
  }
`;

PrimaryButtonUI.defaultProps = {
  isDisabled: false,
};

export default PrimaryButtonUI;
