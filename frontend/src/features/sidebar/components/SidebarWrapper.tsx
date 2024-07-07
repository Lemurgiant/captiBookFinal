import styled from "styled-components";
import { ExpandableProps } from "../interface";
import {
  MOBILE_SIDEBAR_WIDTH_COLLAPSED,
  MOBILE_SIDEBAR_WIDTH_EXPANDED,
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from "../constants";
import { NORMAL_TRANSITION } from "../../constants";

const SidebarWrapper = styled.div<ExpandableProps>`
  height: 100%;
  position: absolute;
  z-index: 1000;
  width: ${({ isExpanded }) =>
    isExpanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED};
  padding: 1.5rem 0;
  display: flex;
  background: ${({ theme }) => theme.bg.dark};
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  border-right: 1px solid grey;
  transition: ${NORMAL_TRANSITION};
  box-shadow: -37px -1px 47px -47px rgba(77, 63, 59, 0.55) inset;
  -webkit-box-shadow: -37px -1px 47px -47px rgba(77, 63, 59, 0.55) inset;
  -moz-box-shadow: -37px -1px 47px -47px rgba(77, 63, 59, 0.55) inset;

  @media (max-width: 576px) {
    width: ${({ isExpanded }) =>
      isExpanded
        ? MOBILE_SIDEBAR_WIDTH_EXPANDED
        : MOBILE_SIDEBAR_WIDTH_COLLAPSED};
  }
`;

export default SidebarWrapper;
