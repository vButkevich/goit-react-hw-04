"use strict";
import axios from "axios";

export const fetchImagesByQuery = async ({ query, page, pageItems = 15 }) => {
  console.log(`pixabay:search=>q:[${query}]`);
  console.log(`pixabay:search=>p:[${page}]`);

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
