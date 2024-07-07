import React, { useState } from "react";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import { Box, Stack, Typography } from "@mui/material";
import BookUI from "../../components/BookUI";
import styled, { useTheme } from "styled-components";
import DividerUI from "../../components/DividerUI";
import { TRANSITIONS } from "../../constants/constants";
import { Session } from "../../interfaces/globalState";
import { toDurationDisplay } from "../helper";
import BarDatumMotion from "../../animations/BarDatumMotion";
import LabelHead from "../../components/LabelHead";

interface HistoryItemProps {
  bookImg: string;
  pageReadCount: number;
  durationInSeconds: number;
  pageCountPerMinute: number;
  date: Date;
}

interface LowLighterProps {
  children: React.ReactNode;
}

const LowLighter: React.FC<LowLighterProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Typography sx={{ color: theme.blant }} fontSize={"inherit"}>
      {children}
    </Typography>
  );
};

const HistoryItem: React.FC<HistoryItemProps> = ({
  bookImg,
  pageReadCount,
  durationInSeconds,
  pageCountPerMinute,
  date,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Stack
        direction="row"
        width="100%"
        alignItems={"center"}
        gap="3rem"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgcolor={isHovered ? theme.blant : theme.dark}
      >
        <Box
          sx={{
            transform: isHovered ? "scale(1.8)" : "scale(1)",
            transition: TRANSITIONS.STEEP,
            padding: isHovered ? "0.5rem 0" : "0",
          }}
        >
          <BookUI src={bookImg} size={"1.4rem"} />
        </Box>
        <Typography fontSize={"12px"} variant="inherit" width="7rem">
          {new Date(date).toDateString()}
        </Typography>
        <Typography fontSize={"12px"} variant="inherit" width="9rem">
          {pageReadCount} {pageReadCount > 1 ? "pages" : "page"} in{" "}
          {toDurationDisplay(durationInSeconds)}
        </Typography>
        <Typography fontSize={"12px"} variant="inherit" width="9rem">
          <LowLighter>EFFICIENCY:</LowLighter>
          {pageCountPerMinute}{" "}
          {pageCountPerMinute > 1 ? "pages/min" : "page/min"}
        </Typography>
      </Stack>
    </>
  );
};

interface BookTrackingHistoryProps {
  sessionCollection: Session[];
  isLoading: boolean;
}

const HistoryItemStack = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  height: 100%;
  width: 100%;
  padding: 0.5rem 1.2rem;
  box-sizing: border-box;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const BookTrackingHistoryInstanceHead = styled.div`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.bg.dark};
  box-sizing: border-box;
  padding: 0rem 1rem;
  align-items: center;
  display: flex;
`;

const BookTrackingHistoryInstance: React.FC<BookTrackingHistoryProps> = ({
  sessionCollection,
  isLoading,
}) => {
  const isSessionCollectionEmpty = sessionCollection.length === 0;
  return (
    <PrimaryFrameUI
      width="40rem"
      height="50rem"
      style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <BookTrackingHistoryInstanceHead>
        <LabelHead>HISTORY</LabelHead>
      </BookTrackingHistoryInstanceHead>
      <DividerUI flexItem />
      <Body>
        {!isSessionCollectionEmpty ? (
          <HistoryItemStack>
            {sessionCollection.map((session, index) => (
              <Stack mt="0.2rem" gap="0.2rem">
                <HistoryItem
                  key={index}
                  bookImg={session.imageURL}
                  pageReadCount={session.pagesRead}
                  durationInSeconds={session.durationInSeconds}
                  pageCountPerMinute={session.pagesReadPerMinute}
                  date={session.date}
                />
                <DividerUI flexItem />
              </Stack>
            ))}
          </HistoryItemStack>
        ) : (
          <BarDatumMotion motion={isLoading ? "LOADING" : "EMPTY"} />
        )}
      </Body>
    </PrimaryFrameUI>
  );
};

export default BookTrackingHistoryInstance;
