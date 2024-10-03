import s from './ImageCard.module.css';

const ImageCard = ({
  src,
  alt,
  onImageClick,
  imgForModal,
  description,
  author,
  likes,
}) => {
  return (
    <div>
      <img
        className={s.photo}
        src={src}
        alt={alt}
        onClick={() =>
          onImageClick({ imgForModal, description, author, likes })
        }
      />
    </div>
  );
};

export default ImageCard;
