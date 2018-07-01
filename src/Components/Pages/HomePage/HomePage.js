import React, { Component } from 'react';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage.js'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>HOMEPAGE</h2>
        <p>WELCOME TO MYSTYLE</p>
        <CreateAccountPage/>
      </div>
    );
  }
}

export default HomePage;
