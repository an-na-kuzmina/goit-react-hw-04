import toast from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';
import s from './SearchBar.module.css';

const SearchBar = ({ setSearchQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query) {
      return toast('Please enter your search query');
    }
    setSearchQuery(query);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.searchBtn}>
          <IoSearchOutline className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
