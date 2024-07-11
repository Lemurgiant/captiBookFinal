import axios, { AxiosRequestConfig } from "axios";
import { ObjectId } from "mongodb";
import {
  BookLocal,
  CaptiBookData,
  QuoteItem,
  QuoteItemLocal,
  Session,
  SummaryItem,
  SummaryItemLocal,
  TermItem,
  TermItemLocal,
} from "../interfaces/globalState";

// try {
//   const response = await axios.request(config);
//   return response.data; // Directly return the data since it's not nested
// } catch (error) {
//   console.error("Failed to fetch productivity data:", error);
//   return []; // Return an empty array or appropriate default value on error
// }
const isProduction = false;
export const webURL = isProduction
  ? "https://captibookfinal-1.onrender.com/"
  : "http://localhost:5000/";

export async function tryCatchAxiosGet<T>(
  config: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axios.request(config);
    return response.data.data || [];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function trycatchAxiosMutate(config: any) {
  try {
    await axios.request(config);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCaptiBookCollectionApi(): Promise<CaptiBookData[]> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${webURL}api/get-all-bookcollection-data`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return tryCatchAxiosGet(config);
}

export async function getSearchBooksAxios(term: string) {
  if (term == "") {
    return [];
  }

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://www.googleapis.com/books/v1/volumes?q=${term}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data || [];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function addOneBookCollectionDataAxios(
  book: BookLocal
): Promise<any> {
  let data = JSON.stringify({
    book: book,
  });

  let config: AxiosRequestConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/add-one-bookcollection-data`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  await trycatchAxiosMutate(config);
}

export async function deleteOneBookCollectionDataAxios(id: ObjectId) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${webURL}api/delete-one-bookcollection-data/${id}`,
    headers: {},
    withCredentials: true,
  };

  await trycatchAxiosMutate(config);
}

export async function recordProductivityDataAxios(
  key: number,
  durationInSeconds: number,
  pagesRead: number,
  pagesReadPerMinute: number,
  bookImageURL: string,
  bookId: ObjectId
): Promise<any> {
  let data = JSON.stringify({
    key: key,
    durationInSeconds: durationInSeconds,
    pagesRead: pagesRead,
    pagesReadPerMinute: pagesReadPerMinute,
    bookImageURL: bookImageURL,
    bookId: bookId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/record-productivity-data`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  await trycatchAxiosMutate(config);
}

export async function getAllProductivityDataAxios(): Promise<Session[]> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${webURL}api/get-all-productivity-data`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return tryCatchAxiosGet(config);
}

export async function addOneSummaryData(summaryData: SummaryItemLocal) {
  let data = JSON.stringify({
    summaryContent: summaryData.summaryContent,
    reference: summaryData.reference,
    bookId: summaryData.bookId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/add-one-summary-data`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function updateOneSummaryData(summaryData: SummaryItem) {
  let data = JSON.stringify({
    summaryContent: summaryData.summaryContent,
    reference: summaryData.reference,
    bookId: summaryData.bookId,
  });

  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${webURL}api/update-one-summary-data/${summaryData._id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function deleteOneSummaryData(summaryId: ObjectId) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${webURL}api/delete-one-summary-data/${summaryId}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function addOneTermData(termData: TermItemLocal) {
  let data = JSON.stringify({
    term: termData.term,
    definition: termData.definition,
    bookId: termData.bookId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/add-one-term-data`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function updateOneTermData(termData: TermItem) {
  let data = JSON.stringify({
    term: termData.term,
    definition: termData.definition,
    bookId: termData.bookId,
  });

  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${webURL}api/update-one-term-data/${termData._id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function deleteOneTermData(termId: ObjectId) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${webURL}api/delete-one-term-data/${termId}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function addOneQuoteData(quoteData: QuoteItemLocal) {
  let data = JSON.stringify({
    quoteContent: quoteData.quoteContent,
    reference: quoteData.reference,
    bookId: quoteData.bookId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/add-one-quote-data`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function updateOneQuoteData(quoteData: QuoteItem) {
  let data = JSON.stringify({
    quoteContent: quoteData.quoteContent,
    reference: quoteData.reference,
    bookId: quoteData.bookId,
  });

  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${webURL}api/update-one-quote-data/${quoteData._id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function deleteOneQuoteData(quoteId: ObjectId) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${webURL}api/delete-one-quote-data/${quoteId}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  await trycatchAxiosMutate(config);
}

export async function signupAxios({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  let data = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${webURL}api/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
}

export async function loginAxios({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = JSON.stringify({ email, password });
  const config = {
    method: "post",
    url: `${webURL}api/login`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
}

export async function updateUserImageAxios(base64: string) {
  const data = JSON.stringify({ base64 });
  const config = {
    method: "post",
    url: `${webURL}api/update-user-image`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };
  const response = await axios.request(config);
  return response.data;
}

export async function updateUserDisplayNameAxios(displayName: string) {
  const data = JSON.stringify({ displayName });
  const config = {
    method: "post",
    url: `${webURL}api/update-user-display-name`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };
  const response = await axios.request(config);
  return response.data;
}

export async function updateUserThemeAxios(theme: 0 | 1) {
  const data = JSON.stringify({ theme });
  const config = {
    method: "post",
    url: `${webURL}api/update-user-theme`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };
  const response = await axios.request(config);
  return response.data;
}

export async function checkEmailAxios(email: string) {
  const data = JSON.stringify({ email });
  const config = {
    method: "post",
    url: `${webURL}api/check-email`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    data: data,
  };
  const response = await axios.request(config);
  return response.data;
}

export async function verifyOtpAxios({
  otp,
  email,
}: {
  otp: string;
  email: string;
}) {
  const data = JSON.stringify({ otp, email });
  const config = {
    method: "post",
    url: `${webURL}api/verify-otp`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
}

export async function regenerateOtpAxios(email: string) {
  const data = JSON.stringify({ email });
  const config = {
    method: "post",
    url: `${webURL}api/regenerate-otp`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
}
