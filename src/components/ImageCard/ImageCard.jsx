// ImageCard.jsx
import css from "./ImageCard.module.css";

const ImageCard = ({ picture }) => {
  return (
    <div className={css.imgCardContainer}>
      <img
        className={css.img}
        src={picture.urls.small}
        alt={picture.description}
        id={picture.id}
      />
    </div>
  );
};

export default ImageCard;
