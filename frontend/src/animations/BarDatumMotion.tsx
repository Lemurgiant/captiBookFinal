import { Stack, Typography } from "@mui/material";
import styled, { keyframes, useTheme } from "styled-components";

const growShrink = (low: string, high: string) => keyframes`
  0%, 100% {
    height: ${low};
  }
  50% {
    height: ${high}; /* Change this value to adjust the maximum height */
  }
`;

const createBarBlock = (
  low: string,
  high: string,
  durationInMs: number
) => styled.div`
  width: 22px;
  position: absolute;
  bottom: 0; /* Fixes the bottom part */
  animation: ${growShrink(low, high)} ${durationInMs}ms infinite normal; /* Adjust duration as needed */
  transform-origin: bottom; /* Ensures the growth starts from the bottom */
  transition: all 0.5s ease-out;
  &.frozen {
    animation: ${growShrink(low, high)} ${durationInMs * 6}ms infinite normal;
    opacity: 0.5;
  }
`;

const Container = styled.div`
  position: relative;
  height: 6rem; /* Adjust this to be the maximum height of your bars */
  display: flex;
  justify-content: center;
`;

const BarBlock1 = createBarBlock("2rem", "4rem", 1110);
const BarBlock2 = createBarBlock("2.5rem", "4rem", 700);
const BarBlock3 = createBarBlock("1.5rem", "3rem", 900);
const BarBlock4 = createBarBlock("2rem", "3.5rem", 870);

type barDatumMotionType = "LOADING" | "EMPTY";

interface BarDatumMotionProps {
  motion: barDatumMotionType;
}

const BarDatumMotion: React.FC<BarDatumMotionProps> = ({ motion }) => {
  const isFrozen = motion === "EMPTY";
  const theme = useTheme();
  const bg = { background: theme.blant };

  return (
    <Stack alignItems={"center"}>
      <Stack direction="row" gap="24px" justifyContent={"center"}>
        <Container>
          <BarBlock1 className={isFrozen ? "frozen" : ""} style={bg} />
        </Container>
        <Container>
          <BarBlock2 className={isFrozen ? "frozen" : ""} style={bg} />
        </Container>
        <Container>
          <BarBlock3 className={isFrozen ? "frozen" : ""} style={bg} />
        </Container>
        <Container>
          <BarBlock4 className={isFrozen ? "frozen" : ""} style={bg} />
        </Container>
      </Stack>
      <Typography variant="inherit" fontSize={"14px"} height="3rem">
        {isFrozen ? "NO DATA IS SHOWN" : "LOADING"}
      </Typography>
    </Stack>
  );
};

export default BarDatumMotion;
