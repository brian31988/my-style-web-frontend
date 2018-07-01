import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.js';
import ProfilePage from './Pages/ProfilePage/ProfilePage.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">MyStyle</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
          </header>
          <div>
            <div className="content">
              <Route exact path="/" component={HomePage} />
              <Route path="/profile" component={ProfilePage} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
