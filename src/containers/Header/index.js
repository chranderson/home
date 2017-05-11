import React, { Component } from 'react';

// import {
//   Button
// } from '../../components';

import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Chris Anderson</h2>
      </div>
    );
  }
}

export default Header;
