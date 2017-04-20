import React, { Component } from 'react';
import { getJSON, success } from '../../helpers/xmlhttprequest';



class Search extends Component {
  
  searchSchool(event, callback) {
    event.preventDefault();

    getJSON(this.props.searchForm)
  }



  render() {
    return (
      <section className="card">
        <form className="form-wrapper" onSubmit={e => this.searchSchool(e, success)}> 
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
