import axios from "axios";
import { Book } from "../interfaces/captiBookProps";

export async function addBookToCollectionApi(book: Book): Promise<any> {
  let data = JSON.stringify({
    book: book,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/api/bookcollection-data",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBookCollectionDataApi() {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/api/get-bookcollection-data",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(config);
    return response.data; // Directly return the data since it's not nested
  } catch (error) {
    console.error("Failed to fetch productivity data:", error);
    return []; // Return an empty array or appropriate default value on error
  }
}
