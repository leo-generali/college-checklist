import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from '../About/About';
import Search from '../Search/Search';

class App extends Component {
  render() {
    return (
      <Router > 
        <div className="App">
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/about">About</Link></li>

            <Route exact path="/" component={Search} />
            <Route path="/about" component={About} />
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
