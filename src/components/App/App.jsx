import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import "modern-normalize";

import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { fetchImagesByQuery } from "../Api/fetchImages-api";

function App() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (serchQuery) => {
    setQuery(serchQuery);
    setError(null);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const itemsPerPage = 15;
  useEffect(() => {
    if (!query) return;
    async function getImages() {
      try {
        setLoading(true);
        const response = await fetchImagesByQuery({
          query,
          page,
          itemsPerPage,
        });
        const images = response.data.hits;

        setImages((prevImages) => [...prevImages, ...images]);
        setHasMore(response.data.totalHits > page * itemsPerPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar submit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {hasMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={!!modalImage}
        onRequestClose={closeModal}
        image={modalImage}
      />
    </>
  );
}

export default App;
