import React, { Component } from "react";

class Form extends Component (){
  constructor (props){
    super(props);
    this.state {
      title : '',
      globalTitle : ''
    }
  }

  render (){
    return (
      <div>
        <h1> Form </h1>
        <form>
          <div> 
            <label> Text </label>
            <input type="text" id="title" name="title" value={this.state.title}/>
          </div>
          <div>
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form; 