import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import { useEffect, useState } from 'react';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((monsters) => {
				setMonsters(monsters);
			});
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchStringChange = (event) => {
		//setSearchField(event.target.value.toLowerCase());  // should avoid modifying functions

		const searchedString = event.target.value.toLowerCase();
		setSearchField(searchedString);
	};
	return (
		<div className="App">
			<h1 className="app-title">Finding Monsters</h1>
			<SearchBar
				onChangeHandler={onSearchStringChange}
				placeholder="Search Monsters"
				className="monsters-Search-bar"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [], // initial state
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((monsters) => {
// 				this.setState(() => {
// 					return { monsters: monsters };
// 				});
// 			});
// 	}

// 	// Since this is a class function (method), it gets initialised only once
// 	onSearchStringChange = (event) => {
// 		const searchField = event.target.value.toLowerCase();

// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state; // Destructuring
// 		const { onSearchStringChange } = this; // Destructuring

// 		const FilteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Finding Monsters</h1>
// 				<SearchBar
// 					onChangeHandler={onSearchStringChange}
// 					placeholder="Search Monsters"
// 					className="monsters-Search-bar"
// 				/>
// 				<CardList monsters={FilteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
