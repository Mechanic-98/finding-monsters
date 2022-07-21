import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [], // initial state
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((monsters) => {
				this.setState(() => {
					return { monsters: monsters };
				});
			});
	}

	// Since this is a class function (method), it gets initialised only once
	onSearchStringChange = (event) => {
		const searchField = event.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { monsters, searchField } = this.state; // Destructuring
		const { onSearchStringChange } = this; // Destructuring

		const FilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<SearchBar
					onChangeHandler={onSearchStringChange}
					placeholder="Search Monsters"
					className="Search-bar"
				/>
				<CardList monsters={FilteredMonsters} />
			</div>
		);
	}
}

export default App;
