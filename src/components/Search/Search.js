import React, { Component } from 'react';
import Result from '../Result/Result';


class Search extends Component {


  
  render() {
    const searched = this.props.collegeInfo;
    let result = null;
    const test = Object.keys(searched).length === 0 && searched.constructor === Object;

    if( !test ) {
      result = <Result collegeInfo={this.props.collegeInfo} />
    }


    return (
      <section>
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
        { result }
      </section>
    );
  }
}

export default Search;
