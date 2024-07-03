import styled from "styled-components";

interface PrimarySquareButtonUIProps {
  size?: string;
  bgcolor?: string;
  bgcolorActive?: string;
}

const PrimarySquareButtonUI = styled.div<PrimarySquareButtonUIProps>`
  width: ${({ size }) => size || "5rem"};
  height: ${({ size }) => size || "5rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background: ${({ theme, bgcolor }) => bgcolor || theme.success[100]};
  box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.light} inset;
  transition: all 0.1s ease-out;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.95;
  }
  &:active {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.light} inset;
    background: ${({ theme, bgcolorActive }) =>
      bgcolorActive || theme.success[200]};
  }
`;

export default PrimarySquareButtonUI;
