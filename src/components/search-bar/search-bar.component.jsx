import './search-bar.styles.css';

const SearchBar = ({ onChangeHandler, placeholder, className }) => {
	return (
		<input
			className={`search-bar ${className}`} // search-bar is name for general class and className is for exact instance
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBar;
