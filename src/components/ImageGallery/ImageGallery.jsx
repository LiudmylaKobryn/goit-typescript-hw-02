import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
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
