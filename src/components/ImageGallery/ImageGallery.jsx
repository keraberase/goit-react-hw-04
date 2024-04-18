// ImageGallery.jsx
import css from "./ImageGallery.module.css";
import ImageModal from "../ImageModal/ImageModal.jsx";

const ImageGallery = ({ pictures }) => {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryList}>
        {pictures.map((picture) => (
          <li key={picture.id} className={css.galleryItem}>
            <ImageModal picture={picture} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
