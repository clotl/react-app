import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavLink exact to="/">
						{" "}
						Accueil{" "}
					</NavLink>
					<NavLink to="/page-de-contact"> Contact </NavLink>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/page-de-contact" component={Contact} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
