import React, { Component } from 'react';
import { getJSON } from '../../helpers/xmlhttprequest';

class Search extends Component {
  
  searchSchool(event, url) {
    event.preventDefault();
    getJSON(url);
  }

  render() {
    return (
      <section className="card">
        <form className="form-wrapper" onSubmit={e => this.searchSchool(e, "test")}> 
          <input 
            className="searchbar searchbar--search" 
            type="text" 
          />
          <input 
            className="searchbar searchbar--submit" 
            type="submit" 
          />
        </form>
      </section>
    );
  }
}

export default Search;
