import React, { Component } from 'react';
import { getJSON } from '../../helpers/xmlhttprequest';
import api from '../../helpers/api.js';

class Search extends Component {
  
  searchSchool(event, url) {
    event.preventDefault();
    console.log(api);
    getJSON(this.props.searchForm);
  }

  render() {
    return (
      <section className="card">
        <form className="form-wrapper" onSubmit={e => this.searchSchool(e, "test")}> 
          <input 
            className="searchbar searchbar--search"
            value={this.props.searchForm}
            type="text" 
            onChange={this.props.updateSearch} 
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
