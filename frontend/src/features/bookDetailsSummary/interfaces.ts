import { ChangeEvent } from "react";

export interface InsightItem {
  // OBJ
  key: number;
  isSelected: boolean;
}

export interface SummaryItem extends InsightItem {
  // OBJ
  reference: string;
  summaryContent: string;
}

export interface TermItem extends InsightItem {
  // OBJ
  term: string;
  definition: string;
}

export interface QuoteItem extends InsightItem {
  // OBJ
  reference: string;
  quoteContent: string;
}

export interface useBookInsightsProps {
  tabVal: string;
  handleTabVal: (event: ChangeEvent<{}>, newVal: string) => void;
  handleAddItemModalOpen: (tabValue: string) => void;
  isAddingItemModalOpen: (tabValue: string) => boolean;

  handleDeleteItemModalOpen: () => void;
  handleDeleteItemModalClose: () => void;
  isDeletingItemModalOpen: boolean;

  handleAddItemModalClose: () => void;
  handleItemClick: (key: number) => void;
  getSelectedItem: () => SummaryItem | TermItem | QuoteItem | null;
  handleDeleteItem: (key: number) => void;
  handleAddSummaryItem: (reference: string, summaryContent: string) => void;
  handleAddTermItem: (term: string, definition: string) => void;
  handleAddQuoteItem: (reference: string, quoteContent: string) => void;
  getSelectedItems: () => SummaryItem[] | TermItem[] | QuoteItem[];
  handleUpdateSummaryItem: (
    key: number,
    reference: string,
    summaryContent: string
  ) => void;
  handleUpdateTermItem: (key: number, term: string, definition: string) => void;
  handleUpdateQuoteItem: (
    key: number,
    reference: string,
    quoteContent: string
  ) => void;
}

export const useBookInsightsContextInit = {
  tabVal: "",
  handleTabVal: () => {},
  handleAddItemModalOpen: () => {},
  isAddingItemModalOpen: () => false,
  handleDeleteItemModalOpen: () => {},
  handleDeleteItemModalClose: () => {},
  isDeletingItemModalOpen: false,
  handleAddItemModalClose: () => {},
  handleItemClick: () => {},
  getSelectedItem: () => null,
  handleDeleteItem: () => {},
  handleAddSummaryItem: () => {},
  handleAddTermItem: () => {},
  handleAddQuoteItem: () => {},
  getSelectedItems: () => [],
  handleUpdateSummaryItem: () => {},
  handleUpdateTermItem: () => {},
  handleUpdateQuoteItem: () => {},
};
