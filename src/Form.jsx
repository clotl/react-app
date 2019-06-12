import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      globalTitle: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("Formulaire rendu");
  }
  componentDidUpdate() {
    console.log("Titre changé");
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      globalTitle: "Mon formulaire -" + this.state.title
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1> {this.state.globalTitle} </h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.title} placeholder="Title" type="text" name="title" />
          <div>
            <input type="submit" value="valider" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
