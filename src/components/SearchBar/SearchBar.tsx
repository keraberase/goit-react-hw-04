import React from "react";
import css from "./SearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

const notify = () => toast("Please enter search term!");

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;

    if (query.trim() === "") {
      notify();
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <BsSearch />
        </button>
        <input
          className={css.field}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
