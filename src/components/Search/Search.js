import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <section className="card">
        <form className="form-wrapper"> 
          <input className="searchbar searchbar--search" type="text" />
          <input className="searchbar searchbar--submit" type="submit" />
        </form>
      </section>
    );
  }
}

export default Search;
