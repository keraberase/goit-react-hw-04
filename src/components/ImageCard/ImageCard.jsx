import css from './ImageCard.module.scss';

const ImageCard = ({image: {urls, alt_description, likes, author}, onImgClick}) => {
 
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
        <img className={css["image"]} src={urls.small} alt={alt_description} onClick={handleClick}/>
      </div>
 
    );
  };
  
  export default ImageCard ;