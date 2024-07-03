import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/bg.png";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import DividerUI from "../components/DividerUI";

const RegisterLayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  background-image: url("/bg.png"); /* Use imported image */
  background-size: cover;
  background-position: center;
`;

const LoginSection = styled.div`
  flex: 5;
  background: ${({ theme }) => theme.bg.dark};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandSection = styled.div`
  flex: 6;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <RegisterLayoutWrapper>
      <BrandSection>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            height: "65%",
            width: "65%",
            borderRadius: "1rem",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7148109243697479) 0%, rgba(0,0,0,0.21946778711485) 35%)",
          }}
        >
          <img src="bookLogo.png" style={{ height: "8rem" }} />
          <Typography variant="inherit" fontSize={"50px"} fontWeight={800}>
            CaptiBook
          </Typography>
          <Typography
            mt="1rem"
            variant="inherit"
            fontSize={"25px"}
            fontWeight={600}
            textAlign={"center"}
            lineHeight={"1.8rem"}
          >
            Unlock your Hidden Wisdom and
            <br /> Track your Reading Journey
          </Typography>
          <Typography
            mt="8rem"
            variant="inherit"
            fontSize={"16px"}
            fontWeight={400}
            textAlign={"center"}
            lineHeight={"1.3rem"}
          >
            You don't need a bookmark
            <br />
            You don't need a notebook
            <br /> You need <strong>CaptiBook</strong>
          </Typography>
        </Box>
      </BrandSection>
      <DividerUI flexItem orientation="vertical" sx={{ width: "2px" }} />
      <LoginSection>
        <Outlet />
      </LoginSection>
    </RegisterLayoutWrapper>
  );
};

export default LoginPage;
