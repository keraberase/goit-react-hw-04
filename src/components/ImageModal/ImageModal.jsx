// ImageModal.jsx
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageModal.module.css';

const ImageModal = ({ picture }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>
        <ImageCard picture={picture} />
      </button>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Modal"
        onRequestClose={closeModal}
        className={css.imageModal}
        overlayClassName={css.modalOverlay}
      >
        <img onClick={closeModal} src={picture.urls.regular} alt={picture.description} className={css.image} />
      </ReactModal>
    </>
  );
};

export default ImageModal;
