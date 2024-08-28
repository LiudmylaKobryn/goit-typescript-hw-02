import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (image: { src: string; alt: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  if (items.length === 0) return null;

  return (
    <div className={s.wraper}>
      <ul className={s.ImageGallery}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard
              url={item.urls.small}
              description={item.alt_description}
              onClick={() =>
                onImageClick({
                  src: item.urls.regular,
                  alt: item.alt_description,
                })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
