// import React from "react";
import { nanoid } from "nanoid";
import css from "./ImageGallery.module.css";

import GalleryItem from "../GalleryItem/GalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <GalleryItem key={nanoid()} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
