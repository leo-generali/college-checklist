import React, { Component } from 'react';
import Result from '../Result/Result';


class Search extends Component {

  updateResults() {
    if( Object.keys(this.props.collegeInfo).length > 0 ) {
      return <Result collegeInfo={this.props.collegeInfo} infoYear={this.props.infoYear} />
    }
  }

  render() {
    return (
        <div className="search-wrapper">
          <section className="margin-spacer">
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
          { this.updateResults() }
        </div>

    );
  }
}

export default Search;
