import axios from "axios";

//available endpoints
export type Endpoint = "ip" | "date" | "time";

interface IpResponse {
  ip: string;
}

interface DateResponse {
  date: string;
  milliseconds_since_epoch: number;
  time: string;
}

interface TimeResponse {
  time: string;
  milliseconds_since_epoch: number;
  date: string;
}

export type FetchResponse = IpResponse | DateResponse | TimeResponse;

export const fetchData = async (endpoint: Endpoint): Promise<FetchResponse> => {
  try {
    // Determine the URL based on the endpoint
    let url: string;
    switch (endpoint) {
      case "ip":
        url = "http://ip.jsontest.com/";
        break;
      case "date":
        url = "http://date.jsontest.com/";
        break;
      case "time":
        url = "http://time.jsontest.com/";
        break;
      default:
        throw new Error("Invalid endpoint");
    }

    // Fetch data from the API
    const response = await axios.get<FetchResponse>(url);
    return response.data;
  } catch (error) {
    console.error("Fetching Error:", error);
    throw error;
  }
};
