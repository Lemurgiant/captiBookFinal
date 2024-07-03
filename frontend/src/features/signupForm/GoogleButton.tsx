import React, { HTMLAttributes } from "react";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const GoogleButtonWrapper = styled.div`
  height: 2.6rem;
  background-color: ${({ theme }) => theme.bg.dark};
  border: 1px solid ${({ theme }) => theme.blant};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 14px;
  color: ${({ theme }) => theme.light};
  font-weight: 500;
  justify-content: center;
  gap: 0.7rem;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.dark};
  }
`;

interface GoogleButtonProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}
const handleGoogle = async () => {
  window.location.href = "http://localhost:5000/auth/google";
};
const GoogleButton: React.FC<GoogleButtonProps> = ({ label, ...props }) => {
  return (
    <GoogleButtonWrapper onClick={handleGoogle} {...props}>
      <FcGoogle size={26} />
      {label}
    </GoogleButtonWrapper>
  );
};

export default GoogleButton;
