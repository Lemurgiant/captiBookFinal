import { Bar } from "react-chartjs-2";
import styled, { useTheme } from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BookUI from "../../../components/BookUI";
import { BarDatumState } from "../../interface";
import PrimarySpinner from "../../../components/PrimarySpinner";
import { bookTrackingBarDisplayState } from "../interface";
import BarDatumMotion from "../../../animations/BarDatumMotion";
import LabelHead from "../../../components/LabelHead";

const BookTrackingGraphWrapper = styled.div`
  background: ${({ theme }) => theme.dark};
  width: fit-content;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.blant};
`;

const UserProgressContainer = styled(Stack)`
  width: 38.6rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  gap: 1rem;
`;

const UserProgressGraph = styled.div`
  width: 100%;
  height: 36rem;
  border: 1px solid grey;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface BookTrackingGraphUIProps {
  barDatum: BarDatumState;
  barDatumDisplay: bookTrackingBarDisplayState;
  isLoading: boolean;
  isEmpty: boolean;
  children?: React.ReactNode;
}

export default function BookTrackingGraphInstance({
  barDatum,
  barDatumDisplay,
  isLoading,
  isEmpty,
  children,
}: BookTrackingGraphUIProps) {
  const theme = useTheme();
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  const isBarPresent = !isLoading && !isEmpty;

  return (
    <BookTrackingGraphWrapper>
      <UserProgressContainer>
        <Stack direction="row" gap="2rem" alignItems={"center"}>
          <LabelHead>PERFORMANCE</LabelHead>
          {children}
        </Stack>
        <UserProgressGraph>
          <>
            <Stack flex="1" overflow="hidden" mt="0rem" gap="1.3rem">
              {barDatumDisplay.map((barDataDisplay, key) => (
                <BookUI
                  key={key}
                  size="3rem"
                  src={barDataDisplay ?? undefined}
                />
              ))}
            </Stack>
            <div style={{ flex: 7 }}>
              {isBarPresent ? (
                <Bar data={barDatum} options={options} height={350} />
              ) : (
                <BarDatumMotion motion={isLoading ? "LOADING" : "EMPTY"} />
              )}
            </div>
          </>
        </UserProgressGraph>
      </UserProgressContainer>
    </BookTrackingGraphWrapper>
  );
}
