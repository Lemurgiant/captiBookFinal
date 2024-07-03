import { useEffect, useRef, useState } from "react";
import useSummaryItemApi from "../../hooks/queries/useSummaryItemApi";
import useTermItemApi from "../../hooks/queries/useTermItemApi";
import useQuoteItemApi from "../../hooks/queries/useQuoteItemApi";
import { useBookInsightsPageContext } from "../../pages/BookInsightsPage/BookInsightsPage";
import { isEmptyString, untitledHandler } from "../helper";
import { InsightsManagementTabVal, inputValuesProps } from "./interface";
import {
  QuoteItem,
  SummaryItem,
  TermItem,
  TermItemLocal,
} from "../../interfaces/globalState";
import { useQueryClient } from "@tanstack/react-query";
import { ObjectId } from "mongodb";

const useInsightsManagement = () => {
  const queryClient = useQueryClient();
  const {
    addOneSummaryMutate,
    isAddOneSummaryPending,
    updateOneSummaryMutate,
    isUpdateOneSummaryPending,
    deleteOneSummaryMutate,
    isDeleteOneSummaryPending,
  } = useSummaryItemApi();
  const {
    addOneTermMutate,
    isAddOneTermPending,
    updateOneTermMutate,
    isUpdateOneTermPending,
    deleteOneTermMutate,
    isDeleteOneTermPending,
  } = useTermItemApi();
  const {
    addOneQuoteMutate,
    isAddOneQuotePending,
    updateOneQuoteMutate,
    isUpdateOneQuotePending,
    deleteOneQuoteMutate,
    isDeleteOneQuotePending,
  } = useQuoteItemApi();
  const { selectedBook, selectedBookId } = useBookInsightsPageContext();

  const [modalInputValues, setModalInputValues] = useState<inputValuesProps>({
    summary: null,
    summaryReference: null,
    term: null,
    definition: null,
    quote: null,
    quoteReference: null,
  });

  const [inputValues, setInputValues] = useState<inputValuesProps>({
    summary: null,
    summaryReference: null,
    term: null,
    definition: null,
    quote: null,
    quoteReference: null,
  });

  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  const [tabVal, setTabVal] = useState<InsightsManagementTabVal>("summary");
  const summaryInputRef = useRef<HTMLTextAreaElement>(null);
  const termInputRef = useRef<HTMLTextAreaElement>(null);
  const quoteInputRef = useRef<HTMLTextAreaElement>(null);

  const handleIsAddItemModalClose = () => setIsAddItemModalOpen(false);
  const handleIsAddItemModalOpen = () => setIsAddItemModalOpen(true);
  const handleIsDeleteItemModalClose = () => setIsDeleteItemModalOpen(false);
  const handleIsDeleteItemModalOpen = () => setIsDeleteItemModalOpen(true);

  const itemCollection = (() => {
    let collection: SummaryItem[] | TermItem[] | QuoteItem[] = [];

    switch (tabVal) {
      case "summary":
        collection = selectedBook?.summaryInsights ?? [];
        break;
      case "term":
        collection = selectedBook?.termInsights ?? [];
        break;
      case "quote":
        collection = selectedBook?.quoteInsights ?? [];
        break;
      default:
        collection = [];
        break;
    }

    return collection.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  })();

  const clearModalInputValues = (fields: Partial<typeof modalInputValues>) => {
    setModalInputValues((prevValues) => ({
      ...prevValues,
      ...fields,
    }));
  };

  const clearAllInputValues = () => {
    setInputValues({
      summary: null,
      summaryReference: null,
      term: null,
      definition: null,
      quote: null,
      quoteReference: null,
    });
  };

  const handleModalInputChange = (field: keyof typeof modalInputValues) => (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setModalInputValues({
      ...modalInputValues,
      [field]: event.target.value,
    });
  };

  const handleInputChange = (field: keyof typeof modalInputValues) => (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [field]: event.target.value,
    });
  };

  const handleAddItem = (
    type: InsightsManagementTabVal,
    data: any,
    ref: React.RefObject<HTMLTextAreaElement>,
    clearFields: Partial<typeof modalInputValues>
  ) => {
    if (isEmptyString(modalInputValues[type])) {
      ref?.current?.focus();
    } else {
      clearModalInputValues(clearFields);

      switch (type) {
        case "summary":
          addOneSummaryMutate(data, {
            onSuccess: () => {
              handleIsAddItemModalClose();
            },
          });
          break;
        case "term":
          addOneTermMutate(data, {
            onSuccess: () => {
              handleIsAddItemModalClose();
            },
          });
          break;
        case "quote":
          addOneQuoteMutate(data, {
            onSuccess: () => {
              handleIsAddItemModalClose();
            },
          });
          break;
      }
    }
  };

  const handleAddOneSummary = () => {
    console.log();
    handleAddItem(
      "summary",
      {
        summaryContent: modalInputValues.summary,
        reference: modalInputValues.summaryReference,
        bookId: selectedBook?._id!,
      },
      summaryInputRef,
      { summary: null, summaryReference: null }
    );
  };

  const handleAddOneTerm = () => {
    handleAddItem(
      "term",
      {
        term: modalInputValues.term,
        definition: modalInputValues.definition,
        bookId: selectedBook?._id!,
      },
      termInputRef,
      { term: null, definition: null }
    );
  };

  const handleAddOneQuote = () => {
    handleAddItem(
      "quote",
      {
        quoteContent: modalInputValues.quote,
        reference: modalInputValues.quoteReference,
        bookId: selectedBook?._id!,
      },
      quoteInputRef,
      { quote: null, quoteReference: null }
    );
  };

  const getMutateFn = () => {
    switch (tabVal) {
      case "summary":
        return handleAddOneSummary;
      case "term":
        return handleAddOneTerm;
      case "quote":
        return handleAddOneQuote;
      default:
        return () => {};
    }
  };

  const getIsAddItemPending = () => {
    switch (tabVal) {
      case "summary":
        return isAddOneSummaryPending;
      case "term":
        return isAddOneTermPending;
      case "quote":
        return isAddOneQuotePending;
      default:
        return false;
    }
  };

  const [selectedItemId, setSelectedItemId] = useState<ObjectId | null>(null);
  const handleSelectItemId = (id: ObjectId) => {
    setSelectedItemId(id);
    clearAllInputValues();
  };

  const selectedItem =
    itemCollection.find((item) => item._id === selectedItemId) ?? null;

  const handleTabVal = (
    event: React.ChangeEvent<{}>,
    newValue: InsightsManagementTabVal
  ) => {
    setTabVal(newValue);
    clearAllInputValues();
    setSelectedItemId(null);
  };

  const handleSaveChanges = () => {
    switch (tabVal) {
      case "summary":
        updateOneSummaryMutate(
          {
            bookId: selectedBookId!,
            _id: selectedItemId!,
            summaryContent: absoluteSummaryInputVal!,
            reference: absoluteSummaryReferenceInputVal,
            date: new Date(),
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["captiBookCollectionQueryData"],
              });
            },
          }
        );
        break;
      case "term":
        updateOneTermMutate(
          {
            bookId: selectedBookId!,
            _id: selectedItemId!,
            term: absoluteTermInputVal!,
            definition: absoluteDefinitionInputVal,
            date: new Date(),
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["captiBookCollectionQueryData"],
              });
            },
          }
        );
        break;
      case "quote":
        updateOneQuoteMutate(
          {
            bookId: selectedBookId!,
            _id: selectedItemId!,
            quoteContent: absoluteQuoteInputVal!,
            reference: absoluteQuoteReferenceInputVal,
            date: new Date(),
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["captiBookCollectionQueryData"],
              });
            },
          }
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    clearAllInputValues();
  }, [selectedItem]);

  const getAbsoluteValue = (
    inputVal: string | null,
    selectedItemVal: string | null
  ) => (inputVal !== null ? inputVal : selectedItemVal);

  const absoluteSummaryInputVal = getAbsoluteValue(
    inputValues.summary,
    (selectedItem as SummaryItem)?.summaryContent
  );

  const absoluteSummaryReferenceInputVal = getAbsoluteValue(
    inputValues.summaryReference,
    (selectedItem as SummaryItem)?.reference
  );

  const absoluteTermInputVal = getAbsoluteValue(
    inputValues.term,
    (selectedItem as TermItem)?.term
  );

  const absoluteDefinitionInputVal = getAbsoluteValue(
    inputValues.definition,
    (selectedItem as TermItem)?.definition
  );

  const absoluteQuoteInputVal = getAbsoluteValue(
    inputValues.quote,
    (selectedItem as QuoteItem)?.quoteContent
  );

  const absoluteQuoteReferenceInputVal = getAbsoluteValue(
    inputValues.quoteReference,
    (selectedItem as QuoteItem)?.reference
  );

  const handleDeleteItem = () => {
    switch (tabVal) {
      case "summary":
        deleteOneSummaryMutate(selectedItemId!, {
          onSuccess: () => {
            handleIsDeleteItemModalClose();
          },
        });
        break;
      case "term":
        deleteOneTermMutate(selectedItemId!, {
          onSuccess: () => {
            handleIsDeleteItemModalClose();
          },
        });
        break;
      case "quote":
        deleteOneQuoteMutate(selectedItemId!, {
          onSuccess: () => {
            handleIsDeleteItemModalClose();
          },
        });
    }
  };

  const getIsUpdateItemPending = () => {
    switch (tabVal) {
      case "summary":
        return isUpdateOneSummaryPending;
      case "term":
        return isUpdateOneTermPending;
      case "quote":
        return isUpdateOneQuotePending;
      default:
        return false;
    }
  };

  return {
    itemCollection,
    selectedItem,
    selectedItemId,
    handleSelectItemId,
    handleSaveChanges,
    isPending: getIsUpdateItemPending(),
    inputValues,
    deleteItemModalState: {
      isOpen: isDeleteItemModalOpen,
      handleOpen: handleIsDeleteItemModalOpen,
      handleClose: handleIsDeleteItemModalClose,
      handleDelete: handleDeleteItem,
      isHandleDeletePending:
        isDeleteOneTermPending ||
        isDeleteOneQuotePending ||
        isDeleteOneSummaryPending,
    },
    absoluteValues: {
      summary: absoluteSummaryInputVal,
      summaryReference: absoluteSummaryReferenceInputVal,
      term: absoluteTermInputVal,
      definition: absoluteDefinitionInputVal,
      quote: absoluteQuoteInputVal,
      quoteReference: absoluteQuoteReferenceInputVal,
    },
    inputChangeHandlers: {
      summary: handleInputChange("summary"),
      summaryReference: handleInputChange("summaryReference"),
      term: handleInputChange("term"),
      definition: handleInputChange("definition"),
      quote: handleInputChange("quote"),
      quoteReference: handleInputChange("quoteReference"),
    },
    tabVal,
    handleTabVal,
    addItemModalState: {
      inputValues: modalInputValues,
      isOpen: isAddItemModalOpen,
      handleOpen: handleIsAddItemModalOpen,
      handleClose: handleIsAddItemModalClose,
      inputChangeHandlers: {
        summary: handleModalInputChange("summary"),
        summaryReference: handleModalInputChange("summaryReference"),
        term: handleModalInputChange("term"),
        definition: handleModalInputChange("definition"),
        quote: handleModalInputChange("quote"),
        quoteReference: handleModalInputChange("quoteReference"),
      },
      mutateHandlers: {
        isDisabled:
          selectedBook === null ||
          isAddOneTermPending ||
          isAddOneQuotePending ||
          isAddOneSummaryPending,
        fn: getMutateFn(),
        isPending: getIsAddItemPending(),
      },
      inputRefs: {
        summary: summaryInputRef,
        term: termInputRef,
        quote: quoteInputRef,
      },
    },
  };
};

export default useInsightsManagement;
