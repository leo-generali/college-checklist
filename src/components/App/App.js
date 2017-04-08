import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from '../About/About';
import Search from '../Search/Search';
import Notes from '../Notes/Notes';
import NotFound from '../NotFound/NotFound';

import reset from '../styles/app.css';

class App extends Component {
  render() {
    return (
      <Router > 
        <div className="app">
          <ul className="header">
            <li className="header--item">
              <Link className="header--item__link" activeClassName="active" to="/">Search</Link>
            </li> 
            <li className="header--item"><Link className="header--item__link" to="/about">About</Link></li>
            <li className="header--item"><Link className="header--item__link" to="/notes">Notes</Link></li>
          </ul>
            <Route exact path="/" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/notes" component={Notes} />
        </div>
      </Router>
    );
  }
}

export default App;
