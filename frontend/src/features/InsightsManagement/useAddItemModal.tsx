import React, { useReducer, useRef, useState } from "react";
import useSummaryItemApi from "../../hooks/queries/useSummaryItemApi";
import { isEmptyString } from "../helper";
import { useBookInsightsPageContext } from "../../pages/BookInsightsPage/BookInsightsPage";
import useSummaryItemApi from "./../../hooks/queries/useSummaryItemApi";
import useBookTrackingApi from "../../hooks/queries/useBookTrackingApi";
import useTermItemApi from "../../hooks/queries/useTermItemApi";
import useQuoteItemApi from "../../hooks/queries/useQuoteItemApi";
import { InsightsManagementTabVal } from "./interface";
import { QuoteItem, SummaryItem, TermItem } from "../../interfaces/globalState";
import { combineReducers } from "@reduxjs/toolkit";
import {
  initialInputVal,
  initialInputValReducer,
} from "./reducers/InputValReducer";
import { initialIndex, initialIndexReducer } from "./reducers/IndexReducer";

const useInsightsManagementTest = () => {
  const [inputValState, inputValDispatch] = useReducer(
    initialInputValReducer,
    initialInputVal
  );
  const [indexState, indexDispatch] = useReducer(
    initialIndexReducer,
    initialIndex
  );
  const [tabVal, setTabVal] = useState<InsightsManagementTabVal>("summary");

  const { selectedBook } = useBookInsightsPageContext();

  const itemCollection = () => {
    switch (tabVal) {
      case "summary":
        return selectedBook?.summaryInsights ?? [];
      case "term":
        return selectedBook?.termInsights ?? [];
      case "quote":
        return selectedBook?.quoteInsights ?? [];
      default:
        return [];
    }
  };

  const handleInputChange = (field: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "SET_INPUT",
      payload: { field, value: event.target.value },
    });
  };

  const createHandleInputChange = (
    field: keyof State
  ): ((
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void) => {
    return handleInputChange(field);
  };

  return {
    state,
    itemCollection,
    dispatch,
    createHandleInputChange,
  };
};

const useInsightsManagementTest2 = () => {
  const { addOneSummaryMutate } = useSummaryItemApi();
  const { addOneTermMutate } = useTermItemApi();
  const { addOneQuoteMutate } = useQuoteItemApi();
  const [inputValues, setInputValues] = useState({
    summary: "",
    summaryReference: "",
    term: "",
    definition: "",
    quote: "",
    quoteReference: "",
  });
  const [tabVal, setTabVal] = useState<InsightsManagementTabVal>("summary");
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const handleIsAddItemModalClose = () => setIsAddItemModalOpen(false);
  const handleAddItemModalOpen = () => setIsAddItemModalOpen(true);
  const { selectedBook } = useBookInsightsPageContext();

  const itemCollection = () => {
    switch (tabVal) {
      case "summary":
        return selectedBook?.summaryInsights ?? [];
      case "term":
        return selectedBook?.termInsights ?? [];
      case "quote":
        return selectedBook?.quoteInsights ?? [];
      default:
        return [];
    }
  };

  const clearAllSummaryInputValue = () => {
    setInputValues({
      ...inputValues,
      summary: "",
      summaryReference: "",
    });
  };

  const clearAllTermInputValue = () => {
    setInputValues({
      ...inputValues,
      term: "",
      definition: "",
    });
  };

  const clearAllQuoteInputValue = () => {
    setInputValues({
      ...inputValues,
      quote: "",
      quoteReference: "",
    });
  };

  const handleSummaryInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const handleSummaryReferenceInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const handleTermInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const handleDefinitionInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const handleQuoteInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const handleQuoteReferenceInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, summary: event.target.value });
  };

  const summaryInputRef = useRef<HTMLTextAreaElement>(null);
  const termInputRef = useRef<HTMLTextAreaElement>(null);
  const quoteInputRef = useRef<HTMLTextAreaElement>(null);

  const handleAddOneSummary = () => {
    if (isEmptyString(inputValues.summary)) {
      summaryInputRef?.current?.focus();
    } else {
      clearAllSummaryInputValue();
      handleIsAddItemModalClose();
      addOneSummaryMutate({
        summaryContent: inputValues.summary,
        reference: inputValues.summaryReference,
        bookId: selectedBook?._id!,
      });
    }
  };

  const handleAddOneTerm = () => {
    if (isEmptyString(inputValues.term)) {
      termInputRef?.current?.focus();
    } else {
      clearAllTermInputValue();
      handleIsAddItemModalClose();
      addOneTermMutate({
        term: inputValues.term,
        definition: inputValues.definition,
        bookId: selectedBook?._id!,
      });
    }
  };

  const handleAddOneQuote = () => {
    if (isEmptyString(inputValues.quote)) {
      quoteInputRef?.current?.focus();
    } else {
      clearAllQuoteInputValue();
      handleIsAddItemModalClose();
      addOneQuoteMutate({
        quoteContent: inputValues.quote,
        reference: inputValues.quoteReference,
        bookId: selectedBook?._id!,
      });
    }
  };

  return {
    inputValues,
    itemCollection,
    inputChangeHandlers: {
      summary: handleSummaryInputChange,
      summaryReference: handleSummaryReferenceInputChange,
      term: handleTermInputChange,
      termReference: handleDefinitionInputChange,
      quote: handleQuoteInputChange,
      quoteReference: handleQuoteReferenceInputChange,
    },
    mutateHandlers: {
      summary: handleAddOneSummary,
      term: handleAddOneTerm,
      quote: handleAddOneQuote,
    },
    addItemModalValues: {
      isAddItemModalOpen,
    },
    addItemModalHandlers: {
      handleAddItemModalOpen,
      handleIsAddItemModalClose,
    },
    inputRefs: {
      summary: summaryInputRef,
      term: termInputRef,
      quote: quoteInputRef,
    },
  };
};

const useAddItemModal = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const handleFirstInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFirstInput(event.target.value);
  };
  const handleSecondInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSecondInput(event.target.value);
  };
  const clearAllInputValue = () => {
    setFirstInput("");
    setSecondInput("");
  };

  return {
    firstInput,
    secondInput,
    handleFirstInputChange,
    handleSecondInputChange,
    clearAllInputValue,
  };
};

const useAddSummaryModal = () => {
  const {
    firstInput: summaryInputValue,
    secondInput: referenceInputValue,
    handleFirstInputChange: handleChangeSummaryInputValue,
    handleSecondInputChange: handleChangeReferenceInputValue,
    clearAllInputValue: clearAllSummaryInputValue,
  } = useAddItemModal();
  const { selectedBook } = useBookInsightsPageContext();
  const { addOneSummaryMutate, isAddOneSummaryPending } = useSummaryItemApi();
  const summaryInputRef = useRef<HTMLTextAreaElement>(null);

  return {
    inputState: {
      summaryInputValue,
      referenceInputValue,
      handleChangeSummaryInputValue,
      handleChangeReferenceInputValue,
      clearAllSummaryInputValue,
      summaryInputRef,
    },
    apiState: {
      summaryItemCollection: selectedBook?.summaryInsights ?? [],
      isAddOneSummaryPending,
      addOneSummaryMutate,
    },
  };
};

const useAddTermModal = () => {
  const {
    firstInput: termInputValue,
    secondInput: definitionInputValue,
    handleFirstInputChange: handleChangeTermInputValue,
    handleSecondInputChange: handleChangeDefinitionInputValue,
    clearAllInputValue: clearAllTermInputValue,
  } = useAddItemModal();
  const { selectedBook } = useBookInsightsPageContext();
  const { addOneTermMutate, isAddOneTermPending } = useTermItemApi();
  const termInputRef = useRef<HTMLTextAreaElement>(null);

  return {
    inputState: {
      termInputValue,
      definitionInputValue,
      handleChangeTermInputValue,
      handleChangeDefinitionInputValue,
      clearAllTermInputValue,
      termInputRef,
    },
    apiState: {
      termItemCollection: selectedBook?.termInsights ?? [],
      isAddOneTermPending,
      addOneTermMutate,
    },
  };
};

const useAddQuoteModal = () => {
  const {
    firstInput: quoteInputValue,
    secondInput: referenceInputValue,
    handleFirstInputChange: handleChangeQuoteInputValue,
    handleSecondInputChange: handleChangeReferenceInputValue,
    clearAllInputValue: clearAllQuoteInputValue,
  } = useAddItemModal();
  const { selectedBook } = useBookInsightsPageContext();
  const { addOneQuoteMutate, isAddOneQuotePending } = useQuoteItemApi();
  const quoteInputRef = useRef<HTMLTextAreaElement>(null);

  return {
    inputState: {
      quoteInputValue,
      referenceInputValue,
      handleChangeQuoteInputValue,
      handleChangeReferenceInputValue,
      clearAllQuoteInputValue,
      quoteInputRef,
    },
    apiState: {
      quoteItemCollection: selectedBook?.quoteInsights ?? [],
      isAddOneQuotePending,
      addOneQuoteMutate,
    },
  };
};

export { useAddSummaryModal, useAddQuoteModal, useAddTermModal };
