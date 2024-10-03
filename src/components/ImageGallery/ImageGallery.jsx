import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {photos.map(photo => (
        <li className={s.galleryItem} key={photo.id}>
          <ImageCard
            src={photo.urls.small}
            alt={photo.alt_description}
            onImageClick={onImageClick}
            imgForModal={photo.urls.regular}
            description={photo.description}
            author={photo.user.name}
            likes={photo.likes}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
