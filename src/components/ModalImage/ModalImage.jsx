import React from "react";
import Modal from "react-modal";

import css from "./ModalImage.module.css";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#454545",
  },
};
const ModalImage = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image Modal"
    style={customStyles}
  >
    {image && (
      <div className={css["modal-container"]}>
        <img
          className={css["modal-image"]}
          src={image.largeImageURL}
          alt={image.tags}
        />
        <div>
          <ul className={css["image-description"]}>
            <li>
              <p>{image.tags}</p>
            </li>
            <li>
              <p>{image.description || "No description"}</p>
            </li>
            <li>
              <p>By: {image.user}</p>
            </li>
            <li>
              <p>Likes: {image.likes}</p>
            </li>
          </ul>
        </div>
      </div>
    )}
  </Modal>
);

export default ModalImage;
