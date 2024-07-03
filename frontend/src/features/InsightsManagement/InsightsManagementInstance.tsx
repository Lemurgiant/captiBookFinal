import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TabGroup from "./TabGroup";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import { BookIconUI } from "../../components/Icons";
import { QuoteItem, SummaryItem, TermItem } from "../../interfaces/globalState";
import DividerUI from "../../components/DividerUI";
import Item from "./Item";
import { ObjectId } from "mongodb";
import { AddItemModal } from "./components/AddItemModal";
import useSummaryItemApi from "../../hooks/queries/useSummaryItemApi";
import {
  useInsightsManagementContextInit,
  useInsightsManagementProps,
} from "./interface";
import useInsightsManagement from "./useInsightsManagement";
import ReferenceList from "./components/ReferenceList";
import OpenAddSummaryModalButton from "./components/OpenAddSummaryModalButton";
import ContentEditor from "./components/ContentEditor";
import ConfirmDeleteModal from "../../components/Modals/ConfirmDeleteModal";

const InsightsManagementInstanceWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InsightsManagementBody = styled(PrimaryFrameUI)`
  min-height: 37rem;
  width: 100%;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto 1fr;
  grid-gap: 2px;
  background-color: ${({ theme }) => theme.blant};
  border: 2px solid ${({ theme }) => theme.blant};
`;

const ToolbarSection = styled.div`
  height: 4rem;
  background-color: ${({ theme }) => theme.bg.dark};
  width: 100%;
  grid-column: 1 / -1;
  display: flex;
  padding-left: 2rem;
  box-sizing: border-box;
  align-items: center;
`;

const ReferenceListColumn = styled.div`
  min-height: 20rem;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
`;

const ContentColumn = styled.div`
  min-height: 20rem;
  background-color: ${({ theme }) => theme.dark};
  padding: 1.4rem 2rem;
  box-sizing: border-box;
`;

const InsightsManagementContext = createContext<useInsightsManagementProps>(
  useInsightsManagementContextInit
);

const InsightsManagementInstance: React.FC = () => {
  const insightsManagementState = useInsightsManagement();
  return (
    <InsightsManagementInstanceWrapper>
      <InsightsManagementContext.Provider value={insightsManagementState}>
        <TabGroup />
        <InsightsManagementBody>
          <ToolbarSection>
            <OpenAddSummaryModalButton />
          </ToolbarSection>
          <ReferenceListColumn>
            <ReferenceList />
          </ReferenceListColumn>
          <ContentColumn>
            <ContentEditor />
          </ContentColumn>
        </InsightsManagementBody>
        <AddItemModal />
        <ConfirmDeleteModal
          isShowing={insightsManagementState.deleteItemModalState.isOpen}
          handleClose={insightsManagementState.deleteItemModalState.handleClose}
          handleDelete={
            insightsManagementState.deleteItemModalState.handleDelete
          }
          isPendingDelete={
            insightsManagementState.deleteItemModalState.isHandleDeletePending
          }
        />
      </InsightsManagementContext.Provider>
    </InsightsManagementInstanceWrapper>
  );
};

export const useInsightsManagementContext = () =>
  useContext(InsightsManagementContext);

export default InsightsManagementInstance;
