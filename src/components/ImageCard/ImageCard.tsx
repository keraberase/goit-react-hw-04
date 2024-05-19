import React from "react";
import css from "./ImageCard.module.scss";
import { Image } from "../interfaceImage";

interface ImageCardProps {
  image: Image;
  onImgClick: (content: {
    modal: string;
    likes: number | null;
    alt_description: string;
    author: string;
  }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image: { urls, alt_description, likes, author },
  onImgClick,
}) => {
  function handleClick() {
    const content = {
      modal: urls.regular,
      likes,
      alt_description,
      author,
    };

    onImgClick(content);
  }

  return (
    <div className={css["image-wrapper"]}>
      <img
        className={css["image"]}
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
