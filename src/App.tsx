import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

function App() {
  const [data, setData] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect(() => {
    if (query.trim() === "") return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchImages(query, page);

        setData((prev) => [...prev, ...response]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setData([]);
    setPage(1);
  };

  const openModal = ({ src, alt }: { src: string; alt: string }) => {
    setModalUrl(src);
    setModalAlt(alt);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster />
      <ImageGallery items={data} onImageClick={openModal} />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
      {data.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
