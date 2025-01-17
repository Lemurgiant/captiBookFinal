import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../features/sidebar/Sidebar";

const AppLayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const MainBarWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box !important;
  padding-top: 1.8rem;
  background-color: ${({ theme }) => theme.bg.dark};
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

interface AppLayoutProps {
  withSidebar: boolean;
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = React.memo(({ children }) => {
  return (
    <AppLayoutWrapper>
      <Sidebar />
      <MainBarWrapper>{children ? children : <Outlet />}</MainBarWrapper>
    </AppLayoutWrapper>
  );
});

export default AppLayout;
