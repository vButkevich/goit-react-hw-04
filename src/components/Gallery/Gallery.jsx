// import React from "react";
import css from "./Gallery.module.css";

import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Gallery;
