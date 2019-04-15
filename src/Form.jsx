import React, { Component } from "react";

class FormEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			globalTitle: ""
		};
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	submitForm(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h1> Titre de la page !! </h1>
				<form onSubmit={this.submitForm}>
					<div>
						{/* <label htmlFor="title"></label> */}
						<input
							type="text"
							id="title"
							name="title"
							onChange={this.onChange}
							value={this.state.lastname}
						/>
					</div>
					<div>
						<input type="submit" value="Valider" />
					</div>
				</form>
			</div>
		);
	}
}

export default FormEmployee;
