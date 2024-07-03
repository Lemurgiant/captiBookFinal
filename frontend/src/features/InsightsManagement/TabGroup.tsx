import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import { useInsightsManagementContext } from "./InsightsManagementInstance";
import { InsightsManagementTabVal } from "./interface";

interface TabUIonProps {
  firstOrLast: "first" | "last" | null;
}

const TabUIon = styled(Tab)<TabUIonProps>`
  && {
    margin-left: 0.1rem;
    margin-right: 1px;
    padding: 0 1rem;
    min-height: 2.4rem;
    font-family: inherit;
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.light};
    border: 1px solid ${({ theme }) => theme.blant};
    &.MuiTouchRipple-child {
      background: ${({ theme }) => theme.light};
    }
    &.Mui-selected {
      color: ${({ theme }) => theme.light};
      background: ${({ theme }) => theme.mainGradient};
      font-weight: bold;
    }
    border-radius: 0.2rem;
    transition: all 0.1s ease-out;
  }
`;

const TabsUIon = styled(Tabs)`
  && {
    & .MuiTabs-indicator {
      background: white;
    }
    min-height: 2.4rem;
  }
`;

const tabList = [
  { label: "SUMMARY", value: "summary" },
  { label: "TERM/WORD", value: "term" },
  { label: "QUOTE", value: "quote" },
];

interface InsightsBoardTabGroupProps {
  tabVal: string;
  handleTabVal: (
    event: React.ChangeEvent<{}>,
    newValue: InsightsManagementTabVal
  ) => void; // Corrected event type
}

const TabGroupPure: React.FC<InsightsBoardTabGroupProps> = ({
  tabVal,
  handleTabVal,
}) => (
  <TabsUIon value={tabVal} onChange={handleTabVal} indicatorColor="primary">
    {tabList.map((tab, index) => (
      <TabUIon
        key={index}
        label={tab.label}
        value={tab.value}
        firstOrLast={
          index === 0 ? "first" : index === tabList.length - 1 ? "last" : null
        }
      />
    ))}
  </TabsUIon>
);

const TabGroup = () => {
  const { tabVal, handleTabVal } = useInsightsManagementContext();
  return <TabGroupPure tabVal={tabVal} handleTabVal={handleTabVal} />;
};

export default TabGroup;
