import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import "modern-normalize";

import Loader from "../Loader/Loader";
import Gallery from "../Gallery/Gallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMore/LoadMore";
import ModalImage from "../ModalImage/ModalImage";

// import axios from "axios";
// import { fetchImagesByQuery } from "../../fetchImages-api";
import { fetchImagesByQuery } from "../Api/fetchImages-api";

function App() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("App.query:", query);

  const handleSearch = (serchQuery) => {
    console.log("App.getQuery", query);
    setQuery(serchQuery);
    // setPage((page) => page + 1);
    setError(null);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    console.log("loadMore:", page);
    setPage((page) => page + 1);
  };

  const openModal = (image) => {
    console.log("image :>> ", image);
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const itemsPerPage = 11;
  useEffect(() => {
    console.log("useEffect(() => ", query);
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
        console.log("response:", response);
        console.log("data:", response.data);
        console.log("images:", images);

        setImages((prevImages) => [...prevImages, ...images]);
        setHasMore(response.data.totalHits >= page * itemsPerPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page]);

  return (
    <>
      <SearchBar submit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <Gallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {hasMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      <ModalImage
        isOpen={!!modalImage}
        onRequestClose={closeModal}
        image={modalImage}
      />
    </>
  );
}

export default App;
