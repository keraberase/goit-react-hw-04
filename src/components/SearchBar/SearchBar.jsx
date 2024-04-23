import css from './SearchBar.module.scss';
import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast('Please enter search term!');
  
  
export const SearchBar = ({ onSearch }) => {
  
	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
	  const query = form.elements.query.value;
    
    if(form.elements.query.value.trim() === "") {
      notify();
      return;
  }
    onSearch(query);
    form.reset();

  };
  
    return (
        <header>
           <form className={css.form} onSubmit={handleSubmit}>
           <button className={css.btn} type="submit"><BsSearch /></button>
                <input className={css.field}
                type="text"
                name="query"
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
                />
            </form>
            <Toaster />
        </header>
    );
  }
  export default SearchBar;