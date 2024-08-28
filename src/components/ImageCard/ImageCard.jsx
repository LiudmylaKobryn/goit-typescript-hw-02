import s from "./ImageCard.module.css";

const ImageCard = ({ url, description, onClick }) => {
  return (
    <div className={s.ImageCard}>
      <img src={url} alt={description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
