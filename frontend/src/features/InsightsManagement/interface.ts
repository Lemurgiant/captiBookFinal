import { ObjectId } from "mongodb";
import { QuoteItem, SummaryItem, TermItem } from "../../interfaces/globalState";

export interface inputValuesProps {
  summary: string | null;
  summaryReference: string | null;
  term: string | null;
  definition: string | null;
  quote: string | null;
  quoteReference: string | null;
}

interface absoluteValuesProps {
  summary: string | null;
  summaryReference: string | null;
  term: string | null;
  definition: string | null;
  quote: string | null;
  quoteReference: string | null;
}

interface inputChangeHandlersProps {
  summary: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  summaryReference: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  term: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  definition: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  quote: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  quoteReference: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface useInsightsManagementProps {
  itemCollection: SummaryItem[] | TermItem[] | QuoteItem[];
  selectedItem: SummaryItem | TermItem | QuoteItem | null;
  selectedItemId: ObjectId | null;
  handleSelectItemId: (id: ObjectId) => void;
  handleSaveChanges: () => void;
  isPending: boolean;
  inputValues: inputValuesProps;
  absoluteValues: absoluteValuesProps;
  inputChangeHandlers: inputChangeHandlersProps;
  deleteItemModalState: {
    isOpen: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    handleDelete: () => void;
    isHandleDeletePending: boolean;
  };
  tabVal: InsightsManagementTabVal;
  handleTabVal: (
    event: React.ChangeEvent<{}>,
    newValue: InsightsManagementTabVal
  ) => void;
  addItemModalState: {
    inputValues: inputValuesProps;
    isOpen: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    inputChangeHandlers: inputChangeHandlersProps;
    mutateHandlers: {
      isDisabled: boolean;
      fn: () => void;
      isPending: boolean;
    };
    inputRefs: {
      summary: React.RefObject<HTMLTextAreaElement>;
      term: React.RefObject<HTMLTextAreaElement>;
      quote: React.RefObject<HTMLTextAreaElement>;
    };
  };
}
export const useInsightsManagementContextInit: useInsightsManagementProps = {
  itemCollection: [],
  selectedItem: null,
  selectedItemId: null,
  handleSelectItemId: () => {},
  handleSaveChanges: () => {},
  isPending: false,
  inputValues: {
    summary: null,
    summaryReference: null,
    term: null,
    definition: null,
    quote: null,
    quoteReference: null,
  },
  deleteItemModalState: {
    isOpen: false,
    handleOpen: () => {},
    handleClose: () => {},
    handleDelete: () => {},
    isHandleDeletePending: false,
  },
  absoluteValues: {
    summary: "",
    summaryReference: "",
    term: "",
    definition: "",
    quote: "",
    quoteReference: "",
  },
  inputChangeHandlers: {
    summary: () => {},
    summaryReference: () => {},
    term: () => {},
    definition: () => {},
    quote: () => {},
    quoteReference: () => {},
  },
  tabVal: "summary",
  handleTabVal: () => {},
  addItemModalState: {
    inputValues: {
      summary: "",
      summaryReference: "",
      term: "",
      definition: "",
      quote: "",
      quoteReference: "",
    },
    inputChangeHandlers: {
      summary: () => {},
      summaryReference: () => {},
      term: () => {},
      definition: () => {},
      quote: () => {},
      quoteReference: () => {},
    },
    isOpen: false,
    handleOpen: () => {},
    handleClose: () => {},
    mutateHandlers: {
      isDisabled: false,
      fn: () => {},
      isPending: false,
    },
    inputRefs: {
      summary: { current: null },
      term: { current: null },
      quote: { current: null },
    },
  },
};

export type InsightsManagementTabVal = "summary" | "quote" | "term";
