import s from "./ImageCard.module.css";

interface ImageCardProps {
  url: string;
  description: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, description, onClick }) => {
  return (
    <div className={s.ImageCard}>
      <img src={url} alt={description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
