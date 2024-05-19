import React from "react";
import css from "./LoadMoreBtn.module.scss";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
