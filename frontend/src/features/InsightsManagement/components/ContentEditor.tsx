import React, { useEffect, useRef, useState } from "react";
import AddItemModalInputPack from "./AddItemModalInputPack";
import { Box, Stack } from "@mui/material";
import SaveContentButton from "./SaveContentButton";
import { useInsightsManagementContext } from "../InsightsManagementInstance";
import {
  QuoteItem,
  SummaryItem,
  TermItem,
  TermItemLocal,
} from "../../../interfaces/globalState";
import { isEmptyString } from "../../helper";

const ContentEditor = () => {
  const ref = useRef(null);
  const {
    isPending,
    tabVal,
    selectedItem,
    inputChangeHandlers,
    inputValues,
    absoluteValues,
    handleSaveChanges,
  } = useInsightsManagementContext();

  const isSaveDisabled = () => {
    const isEveryInputEmpty = Object.values(inputValues).every(
      (item) => item === null
    );

    const isSpecificInputEmpty =
      inputValues.term === "" ||
      inputValues.summary === "" ||
      inputValues.quote === "";

    return isEveryInputEmpty || isSpecificInputEmpty;
  };

  if (selectedItem === null) {
    return null;
  }

  return (
    <>
      {tabVal === "summary" ? (
        <Stack gap="1.2rem">
          <AddItemModalInputPack
            label="Summary:"
            minRows={12}
            maxRows={18}
            isVertical={true}
            textareaRef={ref}
            value={absoluteValues.summary}
            onChange={inputChangeHandlers.summary}
            placeholder="Enter summary..."
          />
          <AddItemModalInputPack
            label="Reference:"
            minRows={2}
            maxRows={2}
            isVertical={true}
            textareaRef={ref}
            value={absoluteValues.summaryReference}
            onChange={inputChangeHandlers.summaryReference}
            placeholder="Enter summary..."
          />
          <Box alignSelf={"center"}>
            <SaveContentButton
              isDisabled={isSaveDisabled()}
              handleSaveChanges={handleSaveChanges}
              isPending={isPending}
            />
          </Box>
        </Stack>
      ) : tabVal === "term" ? (
        <Stack gap="2rem">
          <AddItemModalInputPack
            label="Definition:"
            minRows={6}
            maxRows={6}
            isVertical={true}
            textareaRef={ref}
            value={absoluteValues.definition}
            onChange={inputChangeHandlers.definition}
            placeholder="Enter summary..."
          />
          <Box ml="1rem">
            <AddItemModalInputPack
              label="Term:"
              minRows={1}
              maxRows={1}
              isVertical={false}
              textareaRef={ref}
              value={absoluteValues.term}
              onChange={inputChangeHandlers.term}
              placeholder="Enter term..."
            />
          </Box>
          <Box alignSelf={"center"}>
            <SaveContentButton
              isDisabled={isSaveDisabled()}
              handleSaveChanges={handleSaveChanges}
              isPending={isPending}
            />
          </Box>
        </Stack>
      ) : (
        tabVal === "quote" && (
          <Stack gap="1.4rem">
            <AddItemModalInputPack
              label="Quote:"
              minRows={6}
              maxRows={6}
              isVertical={true}
              textareaRef={ref}
              value={absoluteValues.quote}
              onChange={inputChangeHandlers.quote}
              placeholder="Enter summary..."
            />
            <AddItemModalInputPack
              label="Reference:"
              minRows={2}
              maxRows={2}
              isVertical={true}
              textareaRef={ref}
              value={absoluteValues.quoteReference}
              onChange={inputChangeHandlers.quoteReference}
              placeholder="Enter term..."
            />
            <Box alignSelf={"center"}>
              <SaveContentButton
                isDisabled={isSaveDisabled()}
                handleSaveChanges={handleSaveChanges}
                isPending={isPending}
              />
            </Box>
          </Stack>
        )
      )}
    </>
  );
};

export default ContentEditor;
