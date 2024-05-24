"use strict";
import axios from "axios";

// const fetchImagesByQuery = async (searchTerm, page, pageItems = 15) => {
export const fetchImagesByQuery = async ({ query, page, pageItems = 15 }) => {
  console.log(query);
  console.log(page);
  console.log(`pixabay:search=>q:[${query}]`);
  console.log(`pixabay:search=>p:[${page}]`);
  // const pageItems = 15;
  const baseUrl = "https://pixabay.com/api/";
  const api_key = "42700764-e859e8fc9280be2dbaa9956c4";
  const queryParams = {
    key: api_key,
    q: query,
    safesearch: true,
    image_type: "photo",
    orientation: "horizontal",
    per_page: pageItems,
    page: page,
  };

  /*

    const queryString = new URLSearchParams(queryParams).toString();
    console.log('queryParams:', queryParams);
    const url = `${baseUrl}?${queryString}`;
    const options = {
      method: 'GET',
    };
    axios.defaults.baseURL = 'https://pixabay.com';
    //axios.defaults.baseURL = 'https://pixabay.com/api/';
    const response = axios.get(`/api/?${queryString}`);
    return response;
  */

  try {
    const url = baseUrl;
    const config = { params: queryParams };
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.error("pixabay:Error fetching images:", error);
    throw error;
  } finally {
    console.log(`pixabay:search.end;`);
  }
};

console.log("pixaBay.api:loaded...");
// export default fetchImagesByQuery;
