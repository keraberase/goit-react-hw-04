import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => {
  return <button className={css.loadbtn} onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;
