import React from "react";
import styled from "styled-components";
import { NORMAL_TRANSITION } from "../../constants";
import { BrandLogoProps, ExpandableProps } from "../interface";

const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const LogoText = styled.div<ExpandableProps>`
  transition: ${NORMAL_TRANSITION};
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
`;

const LogoWrapper = styled.div<ExpandableProps>`
  transition: ${NORMAL_TRANSITION};
  display: flex;
  padding-left: 0.2rem;
  box-sizing: border-box;
  gap: 0.2rem;
  color: white;
  align-items: center;
  width: ${({ isExpanded }) => (isExpanded ? "11rem" : "3.3rem")};
`;

const BrandLogo: React.FC<BrandLogoProps> = React.memo(
  ({ isExpanded, src, label }) => (
    <LogoWrapper isExpanded={isExpanded}>
      <LogoImage src={src} alt="Logo" />
      <LogoText isExpanded={isExpanded}>{label}</LogoText>
    </LogoWrapper>
  )
);

export default BrandLogo;
