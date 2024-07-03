import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NORMAL_TRANSITION } from "../../constants";
import {
  ExpandableProps,
  NavButtonProps,
  NavButtonWrapperProps,
} from "../interface";

const NavButtonWrapper = styled(NavLink)<NavButtonWrapperProps>`
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

  &:hover {
    background: ${({ theme }) => theme.dark};
  }

  &.active {
    background: ${({ theme }) => theme.mainGradient};
  }

  @media (max-width: 576px) {
    padding-left: 0.5rem;
    height: 2.6rem;
    width: ${({ isExpanded }) => (isExpanded ? "12rem" : "2.6rem")};
  }
`;

const NavButtonLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButtonText = styled.div<ExpandableProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
`;
const NavButton: React.FC<NavButtonProps> = ({
  logo,
  label,
  to,
  isExpanded,
  onClick,
  ...props
}) => (
  <NavButtonWrapper
    to={to}
    isExpanded={isExpanded}
    onClick={onClick}
    {...props}
  >
    <NavButtonLogo>{logo}</NavButtonLogo>
    <NavButtonText isExpanded={isExpanded}>{label}</NavButtonText>
  </NavButtonWrapper>
);

export default NavButton;
