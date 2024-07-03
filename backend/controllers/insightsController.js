import { handleRequest, sendResponse } from "../utils/controlHelpers";

const validateSummaryCollectionData = (data) => {
  const errors = [];

  if (typeof data.summaryContent === "undefined") {
    errors.push("summaryContent is required");
  }

  if (typeof data.reference === "undefined") {
    errors.push("reference is required");
  }

  return errors;
};

export const addOneSummaryCollectionData = (req, res) => {
  handleRequest(req, res, async () => {
    const errors = validateSummaryCollectionData(req.body);

    if (errors.length > 0) {
      sendResponse(res, 400, errors.join(","));
    } else {
      sendResponse(res, 200, "");
    }
  });
};
export const addOneTermCollectionData = (req, res) => {
  handleRequest(req, res, async () => {
    const { term, definition } = req.body;
    sendResponse(res, 200, "");
  });
};

export const addOneQuoteCollectionData = (req, res) => {
  handleRequest(req, res, async () => {
    const { quoteContent, reference } = req.body;
    sendResponse(res, 200, "");
  });
};
