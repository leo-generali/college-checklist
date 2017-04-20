import React, { Component } from 'react';

class Search extends Component {
  
  render() {
    return (
      <section className="card">
        <form className="form-wrapper" onSubmit={e => this.props.searchSchool(e)}> 
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
