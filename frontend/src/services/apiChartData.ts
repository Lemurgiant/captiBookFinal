import axios from "axios";




export async function recordProductivityDataApi(
  key: number,
  durationInSeconds: number | null,
  pageReadCount: number | null,
  pageCountPerMinute: number | null
): Promise<any> {
 

  let data = JSON.stringify({
    key: key,
    durationInSeconds: durationInSeconds ?? 0,
    pageReadCount: pageReadCount ?? 0,
    pageCountPerMinute: pageCountPerMinute ?? 0
  });


  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/productivity-data',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  };


  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }

}
export async function getProductivityDataApi() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/get-productivity-data',
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.request(config);
    return response.data; // Directly return the data since it's not nested
  } catch (error) {
    console.error("Failed to fetch productivity data:", error);
    return []; // Return an empty array or appropriate default value on error
  }
}
