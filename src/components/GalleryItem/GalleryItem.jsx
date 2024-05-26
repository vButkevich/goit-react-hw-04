// import React from "react";
import css from "./GalleryItem.module.css";
import { nanoid } from "nanoid";

const GalleryItem = ({ image, onClick }) => {
  return (
    <li key={nanoid()} onClick={() => onClick(image)}>
      <img src={image.webformatURL} alt={image.tags} />{" "}
      {/* <img src={image.previewURL} alt={image.tags} /> */}
    </li>
  );
};

export default GalleryItem;
