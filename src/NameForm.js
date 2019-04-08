import React, { Component } from "react";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "Homer Simpson" };

		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent(event) {
		this.setState({ name: event.target.value });
	}

	render() {
		return (
			<form>
				<label htmlFor="name">Name :</label>
				<input
					id="name"
					type="text"
					value={this.state.name}
					onChange={this.handleEvent}
				/>
			</form>
		);
	}
}

export default NameForm;
