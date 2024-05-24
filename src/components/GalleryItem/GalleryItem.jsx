import React from "react";
import css from "./GalleryItem.module.css";

const GalleryItem = ({ image, onClick }) => {
  // console.log("image", image);
  return (
    <li onClick={() => onClick(image)}>
      <div>
        {/* <img src={image.webformatURL} alt={image.tags} /> */}{" "}
        <img src={image.previewURL} alt={image.tags} />
      </div>
    </li>
  );
};

export default GalleryItem;
