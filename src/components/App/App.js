import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import About from '../About/About';
import Search from '../Search/Search';
import Notes from '../Notes/Notes';
import NotFound from '../NotFound/NotFound';

import '../../css/styles.css';

class App extends Component {
  constructor() {
    super();

    this.updateSearch=this.updateSearch.bind(this);

    this.state = {
      searchForm: "",
      collegeInfo: {}
    }
  }

  updateSearch = (e) => {
    const searchForm = e.currentTarget.value;
    this.setState({searchForm: searchForm})
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
                to="/">Search</NavLink>
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
            <Route 
              exact path="/" 
              render={ () => <Search 
                searchForm={this.state.searchForm}
                updateSearch={this.updateSearch}
              />}
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
