import styled from "styled-components";
import { TRANSITIONS } from "../../../constants/constants";

interface TrackerHeadUI {
  isReading: boolean;
}

const TrackerHead = styled.div<TrackerHeadUI>`
  width: 100%;
  height: 100%;
  border: ${({ isReading, theme }) =>
    isReading ? `3px solid ${theme.primary[200]}` : `3px solid ${theme.blant}`};
  color: ${({ isReading, theme }) => (isReading ? theme.light : theme.blant)};
  font-size: 32px;
  font-weight: bold;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${TRANSITIONS.NORMAL};
`;

export default TrackerHead;
