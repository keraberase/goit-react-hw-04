import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal"; 

import fetchImages from "../../fetchApi.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

Modal.setAppElement("#root"); 

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handleSearchCard = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPictures([]);
    setLoading(false);
    setError(false);
    setShowLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (picture) => {
    setSelectedPicture(picture);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchImages(query, page);
        setError(false);
        setPictures((photos) => [...photos, ...response]);
        setShowLoadMore(true);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearchCard} />
      {error && <p>Error, please try reloading</p>}
      <ImageGallery pictures={pictures} onImageClick={handleImageClick} />
      {loading && <p>Loading articles, please wait...</p>}
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      <Modal
        isOpen={selectedPicture !== null}
        onRequestClose={() => setSelectedPicture(null)}
        className="modal" // Додайте клас "modal" для модального вікна
        overlayClassName="overlay" // Додайте клас "overlay" для заднього фону
      >
        {selectedPicture && (
          <img
            src={selectedPicture.urls.regular}
            alt={selectedPicture.description}
            className="modal-image"
          />
        )}
      </Modal>

      <Toaster position="top-right" />
    </>
  );
};

export default App;
