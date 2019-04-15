import React, { Component } from "react";
import "./css/Search.css";

class Search extends Component {
  readData = e => {
    //Termino de busqueda
    const query = e.target.value;

    //Enviando por props
    this.props.search(query);
  };

  render() {
    return (
      <form className="buscador">
        <input type="text" placeholder="Búsqueda" onChange={this.readData} />
      </form>
    );
  }
}

export default Search;
