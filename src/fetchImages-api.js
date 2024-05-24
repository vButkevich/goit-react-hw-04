import axios from "axios";

console.log("fetchImajes.js - loaded");

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

export const fetchImagesByQuery = async (query) => {
  console.log("fetchImajes.js - process...", query);
  const response = await axios.get(`/search?query=${query}`);
  console.log("response:", response);
  // return response.data.hits;
  return response;
};
