import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
			name: 'Abhishek',
		};
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hi {this.state.name}</p>
					<button
						onClick={() => {
							this.setState(
								() => {
									// shallow merge
									return { name: 'Ojus' };
								},
								() => {
									console.log(this.state.name);
								}
							);
						}}
					>
						Change name
					</button>
				</header>
			</div>
		);
	}
}

export default App;
