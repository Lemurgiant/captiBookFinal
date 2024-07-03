import React from "react";
import styled from "styled-components";
import { NORMAL_TRANSITION } from "../../constants";
import {
  ExpandableProps,
  LogoutButtonProps,
  NavButtonWrapperProps,
} from "../interface";

const LogoutButtonWrapper = styled.div<NavButtonWrapperProps>`
  transition: ${NORMAL_TRANSITION};
  color: white;
  width: ${({ isExpanded }) => (isExpanded ? "12rem" : "3.3rem")};
  height: 3.3rem;
  display: flex;
  align-items: center;
  padding-left: 0.9rem;
  gap: 1rem;
  box-sizing: border-box;
  border-radius: 0.3rem;
  text-decoration: none;
  background: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.dark};
  }

  @media (max-width: 576px) {
    padding-left: 0.5rem;
    height: 2.6rem;
    width: ${({ isExpanded }) => (isExpanded ? "12rem" : "2.6rem")};
  }
`;

const LogoutButtonLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutButtonText = styled.div<ExpandableProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
`;
const LogoutButton: React.FC<LogoutButtonProps> = ({
  logo,
  label,
  isExpanded,
  onClick,
  ...props
}) => (
  <LogoutButtonWrapper isExpanded={isExpanded} onClick={onClick} {...props}>
    <LogoutButtonLogo>{logo}</LogoutButtonLogo>
    <LogoutButtonText isExpanded={isExpanded}>{label}</LogoutButtonText>
  </LogoutButtonWrapper>
);

export default LogoutButton;
