import styled, { css, keyframes } from "styled-components";
import { FaBook } from "react-icons/fa";
import Stack from "@mui/material/Stack";

const opaceZoomLoop = keyframes`
  0%, 50% {
    transform: translateY(0) scale(1.0); /* Start and end position */
  }
  30% {
    transform: translateY(-8px) scale(1.2); /* Jump up */
  }
`;

const ClosedBookUIon = styled.div`
  animation: ${opaceZoomLoop} 3s cubic-bezier(0.06, 0.01, 0.03, 0.78) infinite;
`;

interface ClosedBookUIProps {
  style?: any;
}

export default function ClosedBook({ style }: ClosedBookUIProps) {
  return (
    <Stack alignItems={"center"} gap="1rem" style={style}>
      <ClosedBookUIon>
        <FaBook size={40} />
      </ClosedBookUIon>
      BOOK CLOSED
    </Stack>
  );
}
