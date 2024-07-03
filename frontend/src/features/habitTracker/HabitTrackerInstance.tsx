import { createContext, useContext } from "react";
import styled from "styled-components";
import { useHabitTrackerContextInit, useHabitTrackerProps } from "./interface";
import Aside from "./Aside";
import TrackerHead from "./components/TrackerHead";
import Body from "./Body";
import RecordSessionModal from "./components/RecordSessionModal";
import SelectBookModal from "./components/SelectBookModal";
import GlowableFrame from "./components/GlowableFrame";

const HabitTrackerPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 20rem 41rem;
  grid-template-rows: 4rem 40rem;
  width: 61rem;
  min-height: 44rem;
  grid-gap: 1.4rem;
`;

const Head = styled.div`
  grid-column: 1 / span 2;
`;

interface HabitTrackerPageProps {
  habitTracker: useHabitTrackerProps;
}

const HabitTrackerContext = createContext<useHabitTrackerProps>(
  useHabitTrackerContextInit
);

export default function HabitTrackerInstance({
  habitTracker,
}: HabitTrackerPageProps) {
  return (
    <HabitTrackerPageWrapper>
      <Head>
        <TrackerHead isReading={habitTracker.isCurrentlyReading}>
          TRACKER
        </TrackerHead>
      </Head>
      <HabitTrackerContext.Provider value={habitTracker}>
        <GlowableFrame isGlowing={habitTracker.isCurrentlyReading}>
          <Aside habitTracker={habitTracker} />
        </GlowableFrame>
        <GlowableFrame isGlowing={habitTracker.isCurrentlyReading}>
          <Body habitTracker={habitTracker} />
          <RecordSessionModal habitTracker={habitTracker} />
          <SelectBookModal />
        </GlowableFrame>
      </HabitTrackerContext.Provider>
    </HabitTrackerPageWrapper>
  );
}

export const useHabitTrackerContext = () => useContext(HabitTrackerContext);
