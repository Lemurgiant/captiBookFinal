import styled from "styled-components";

interface PrimaryModalCloseButtonUIProps {
  bgcolor?: string;
  bgcolorActive?: string;
}

const PrimaryTinyButtonUI = styled.div<PrimaryModalCloseButtonUIProps>`
  height: 32px;
  background-color: ${({ theme, bgcolor }) => bgcolor || theme.primary[200]};
  border-radius: 0.3rem;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease-out;
  color: white;
  padding: 0;
  box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.light} inset;

  &:hover {
    opacity: 0.95;
  }
  &:active {
    background-color: ${({ theme, bgcolorActive }) =>
      bgcolorActive || theme.primary[300]};
  }

  &:active {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.light} inset;
  }
`;
export default PrimaryTinyButtonUI;
