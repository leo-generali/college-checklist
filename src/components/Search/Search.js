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
