import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import About from '../About/About';
import Search from '../Search/Search';
import Notes from '../Notes/Notes';
import NotFound from '../NotFound/NotFound';
import Result from '../Result/Result';

import '../../css/styles.css';

import api from '../../helpers/api.js';
import { urlCreator } from '../../helpers/url_creator.js';


class App extends Component {
  constructor() {
    super();

    this.updateSearch=this.updateSearch.bind(this);
    this.searchSchool=this.searchSchool.bind(this);

    this.state = {
      searchForm: "",
      collegeInfo: {}
    }
  }

  updateSearch = (e) => {
    const searchForm = e.currentTarget.value;
    this.setState({searchForm: searchForm})
  }

  searchSchool(event) {
    event.preventDefault();
    const that = this;
    const mods = urlCreator();
    const name = this.state.searchForm;
    const url = 
      api.prefix + 
      name + "&_fields=" +
      mods +
      api.key;
    console.log(url);


    fetch(url).then(function(response){
      return response.json();
    }).then(function(json){
      const schoolInfo = json.results[0]; 
      console.log(json.results[0]);
      if(schoolInfo) {
        that.setState({collegeInfo: schoolInfo});
      }
    });
  }

  render() {
    return (
      <Router > 
        <div className="app">
          <ul className="header margin-spacer">
            <li className="header--item">
              <NavLink 
                className="header--item__link" 
                activeClassName="header--item__active"
                to="/search">Search</NavLink>
              </li> 
            <li className="header--item">
              <NavLink 
                className="header--item__link" 
                activeClassName="header--item__active"
                to="/about">About</NavLink>
            </li>
            <li className="header--item">
              <NavLink 
                className="header--item__link" 
                activeClassName="header--item__active"
                to="/notes">Notes</NavLink>
            </li>
          </ul>
          <main className="body">
            <Route exact path="/search" render={ 
                () => <Search 
                searchForm={this.state.searchForm}
                collegeInfo={this.state.collegeInfo}
                updateSearch={this.updateSearch}
                searchSchool={this.searchSchool} /> }
               />      
            <Route path="/about" component={About} />
            <Route path="/notes" component={Notes} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
