import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <section className="card">
        <form className="form-wrapper"> 
          <div className="search-wrapper">
            <input className="searchbar searchbar--search" type="text" />
          </div>
          <input className="searchbar searchbar--submit" type="submit" />
        </form>
      </section>
    );
  }
}

export default Search;
