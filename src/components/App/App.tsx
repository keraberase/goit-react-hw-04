import React from "react";
import "./App.module.css";
import { useState, useRef } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImagesWithQuery } from "../APIservices/APIservices";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoaderComponent from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../interfaceImage";

interface ModalContent {
  modal: string;
  alt_description: string;
  likes: number | null;
  author: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    modal: "",
    alt_description: "",
    likes: null,
    author: "",
  });
  const loadMoreBtnRef = useRef<HTMLDivElement>(null);

  const onSubmit = (query: string) => {
    setImages([]);
    setTotalPages(1);
    setPage(1);
    setQuery(query);
  };

  const onLoadMore = () => {
    setPage((prevPage) => (prevPage ? prevPage + 1 : 1));
  };

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithQuery(query, page);
        if (!data || data.results.length === 0) {
          return;
        }
        setTotalPages(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(data.total_pages > page);
      } catch (err: unknown) {
        setError(true);
        console.log((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  useEffect(() => {
    if (loadMoreBtnRef.current) {
      loadMoreBtnRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [images]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setModalContent({
      modal: "",
      alt_description: "",
      likes: null,
      author: "",
    });
    setIsOpen(false);
  }

  function clickOpenModal(content: ModalContent) {
    setModalContent(content);
    openModal();
  }

  return (
    <div className="gallery-container">
      <SearchBar onSearch={onSubmit} />
      {loading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImgClick={clickOpenModal} />
      )}
      <ImageModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        content={modalContent}
      />
      {showBtn && page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <div ref={loadMoreBtnRef} />
    </div>
  );
}

export default App;
