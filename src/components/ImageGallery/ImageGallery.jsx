import css from './ImageGallery.module.scss';
import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({images, onImgClick}) => {
    
    return (
        <ul className={css["image-gallery"]}>
             {images.map((image, index) => {
                return (
                    <li key={`${image.id}-${index}`}>
                        <ImageCard image={image} onImgClick={onImgClick}/>
                    </li>
                );
            })}
        </ul>

    );
    
  }
  
  export default ImageGallery;