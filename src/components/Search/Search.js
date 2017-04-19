import React, { Component } from 'react';
import { getJSON, success } from '../../helpers/xmlhttprequest';


class Search extends Component {
  
  searchSchool(event) {
    event.preventDefault();
    const data = getJSON(this.props.searchForm, success);
    console.log(data);
  }

  render() {
    return (
      <section className="card">
        <form className="form-wrapper" onSubmit={e => this.searchSchool(e)}> 
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
