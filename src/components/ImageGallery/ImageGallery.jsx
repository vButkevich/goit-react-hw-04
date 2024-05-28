// import React from "react";
import { nanoid } from "nanoid";
import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageCard key={nanoid()} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
