import { createContext, useContext } from "react";
import styled from "styled-components";
import BookDetailsSummaryInstance from "../../features/bookDetailsSummary/BookDetailsSummaryInstance";
import InsightsManagementInstance from "../../features/InsightsManagement/InsightsManagementInstance";
import {
  useBookInsightsPageContextInit,
  useBookInsightsPageProps,
} from "./interface";
import useBookInsightsPage from "./useBookInsightsPage";

const BookInsightsPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding-bottom: 2rem;
`;

const DetailsHead = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  height: 11rem;
  margin-left: auto;
  margin-right: auto;
`;

const ManagementBody = styled.div`
  width: 80%;
  display: flex;
`;
const BookInsightsPageContext = createContext<useBookInsightsPageProps>(
  useBookInsightsPageContextInit
);

const BookInsightsPage = () => {
  const bookInsightsPageState = useBookInsightsPage();
  return (
    <BookInsightsPageWrapper>
      <BookInsightsPageContext.Provider value={bookInsightsPageState}>
        <DetailsHead>
          <BookDetailsSummaryInstance />
        </DetailsHead>
        <ManagementBody>
          <InsightsManagementInstance />
        </ManagementBody>
      </BookInsightsPageContext.Provider>
    </BookInsightsPageWrapper>
  );
};

export const useBookInsightsPageContext = () =>
  useContext(BookInsightsPageContext);

export default BookInsightsPage;
