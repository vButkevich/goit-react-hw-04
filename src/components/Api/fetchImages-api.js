"use strict";
import axios from "axios";

export const fetchImagesByQuery = async ({ query, page, per_page = 15 }) => {
  const baseUrl = "https://pixabay.com/api/";
  const api_key = "42700764-e859e8fc9280be2dbaa9956c4";
  const queryParams = {
    key: api_key,
    q: query,
    safesearch: true,
    image_type: "photo",
    orientation: "horizontal",
    per_page: per_page,
    page: page,
  };

  try {
    const url = baseUrl;
    const config = { params: queryParams };
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUnsplashPhotos = async ({ query, page, per_page = 12 }) => {
  console.log("fetch.query:>>", query);
  console.log("fetch.page :>> ", page);
  // const baseUrl = "https://api.unsplash.com";
  const applicationId = "616146"; //"s6HcyggW76UGH-F6m4_Ir1ednUPTQsXjx4Bzgw7_oJA"; //9hQYhnf$mDxsyGN
  const accessKey = "xvkOVqjkSJdnFYZRov1MDkuO2wyvPttK6JvRmob_IJA";
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
    });
    console.log("response :>> ", response);
    return response;
  } catch (error) {
    throw error;
  }
};
