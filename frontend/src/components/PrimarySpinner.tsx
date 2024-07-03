import React from "react";
import styled, { keyframes } from "styled-components";

// Define a keyframe animation for spinning
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface SpinnerProps {
  size?: string;
  spinColor?: string;
  bgcolor?: string;
}

// Styled component for the spinner
const PrimarySpinner = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  border: 3px solid ${({ theme, bgcolor }) => bgcolor || theme.blant};
  border-radius: 50%;
  border-top-color: ${({ theme, spinColor }) =>
    spinColor || theme.primary[200]};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

export default PrimarySpinner;
