import React, { Component } from "react";

class FavFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			poster: "",
			comment: ""
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
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state)
		};
		const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
		fetch(url, config)
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					alert(res.error);
				} else {
					alert(`Film ajouté avec l'ID ${res}!`);
				}
			})
			.catch(e => {
				console.error(e);
				alert("Erreur lors de l'ajout du film");
			});
	}

	render() {
		return (
			<div className="FormMovie">
				<h1>Add a new movie</h1>
				<form onSubmit={this.submitForm}>
					<fieldset>
						<legend>Informations</legend>
						<div className="form-data">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								onChange={this.onChange}
								value={this.state.name}
							/>
						</div>

						<div className="form-data">
							<label htmlFor="poster">Poster</label>
							<input
								type="url"
								id="poster"
								name="poster"
								onChange={this.onChange}
								value={this.state.poster}
							/>
						</div>

						<div className="form-data">
							<label htmlFor="comment">Comment</label>
							<textarea
								name="comment"
								id="comment"
								cols="100"
								rows="8"
								onChange={this.onChange}
								value={this.state.comment}
							>
								{" "}
							</textarea>
						</div>
						<hr />
						<div className="form-data">
							<input type="submit" value="Ajouter" />
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default FavFilms;
