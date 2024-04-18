import { Component } from 'react';
import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (!query.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    this.props.onSearch(query); 
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <button className={css.searchBtn} type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
