// import React from "react";
import css from "./ImageCard.module.css";
import { nanoid } from "nanoid";

const GalleryItem = ({ image, onClick }) => {
  return (
    <li key={image.id} onClick={() => onClick(image)}>
      {/* <img src={image.webformatURL} alt={image.tags} /> */}
      <img
        src={image.urls.small}
        alt={image.slug}
        id={image.id}
      />
      {/* <p>{image.description}</p> */}
    </li>
  );
};

export default GalleryItem;
