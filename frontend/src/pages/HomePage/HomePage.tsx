import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import ProductivityGraph from "../../features/productivityGraph/";
import BookTrackingGraph from "../../features/bookTrackingGraph/BookTrackingGraph";
import styled from "styled-components";
import BookTrackingHistory from "../../features/bookTrackingHistory/BookTrackingHistory";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <HomePageLayoutUI>
      <Stack gap="1.4rem">
        <ProductivityGraph />
        <BookTrackingGraph />
      </Stack>
      <BookTrackingHistory />
    </HomePageLayoutUI>
  );
};

const HomePageLayoutUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default HomePage;
