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
        <div className="App">
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/notes">Notes</Link></li>

            <Route exact path="/" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/notes" component={Notes} />
            <Route path="/*" component={NotFound} />
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
