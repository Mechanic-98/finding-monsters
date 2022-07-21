import { Component } from 'react';

class SearchBar extends Component {
	render() {
		const { onChangeHandler, placeholder, className } = this.props;
		return (
			<input
				className={className}
				type="search"
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default SearchBar;
