import axios from "axios";

export async function getSearchBooksApi(term: string) {
    if (term == "") {
        return [];
    }
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.googleapis.com/books/v1/volumes?q=${term}`,
        headers: { }
    };

    try {
        const response = await axios.request(config);
        return response.data; // Directly return the data since it's not nested
      } catch (error) {
        console.error("Failed to fetch google books:", error);
      }

}