import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NameForm from "./NameForm.js";
// import GenerateEmployee from "./GenerateEmployee";
// import DisplayEmployee from "./DisplayEmployee";
import SimpsonQuotes from "./SimpsonQuotes";
import GenerateSimpsonQuotes from "./GenerateSimpsonQuotes";

const sampleEmployee = {
	gender: "male",
	name: {
		title: "mr",
		first: "mathys",
		last: "aubert"
	},
	location: {
		street: "9467 rue gasparin",
		city: "perpignan",
		postcode: "90208"
	},
	email: "mathys.aubert@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/66.jpg"
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: sampleEmployee,
			simpson: "lalala"
		};
	}
	// getEmployee() {
	// 	// Récupération de l'employé via fetch
	// 	fetch("https://randomuser.me/api?nat=fr")
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			// Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
	// 			this.setState({
	// 				employee: data.results[0]
	// 			});
	// 		});
	// }

	getQuotes() {
		// Récupération des infos simpson via fetch
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
			.then(response => response.json())
			.then(data => {
				// Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
				this.setState({
					simpson: data[0]
				});
			});
	}

	render() {
		return (
			<React.Fragment>
				{/* <GenerateEmployee selectEmployee={() => this.getEmployee()} />
				<DisplayEmployee employee={this.state.employee} /> */}

				<SimpsonQuotes simpson={this.state.simpson} />
				<GenerateSimpsonQuotes newQuote={() => this.getQuotes()} />

				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						<NameForm />
					</header>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
