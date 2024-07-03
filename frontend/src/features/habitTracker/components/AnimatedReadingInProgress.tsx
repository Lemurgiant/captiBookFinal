import styled, { keyframes } from "styled-components";
import { MdOutlineMenuBook } from "react-icons/md";

const zoomLoop = keyframes`
  from {
    transform: scale(1.0);
  }
  to {
    transform: scale(1.3)
  }
`;

const opaceLoop = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

const ReadingInProgressAnimator = styled.div`
  animation: ${zoomLoop} 1s linear infinite alternate;
`;

const ReadingInProgressUIon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  animation: ${opaceLoop} 1s linear infinite alternate;
`;

export default function AnimatedReadingInProgress() {
  return (
    <ReadingInProgressUIon>
      <ReadingInProgressAnimator>
        <MdOutlineMenuBook size={50} color="white" />
      </ReadingInProgressAnimator>
      <div>READING IN PROGRESS...</div>
    </ReadingInProgressUIon>
  );
}
