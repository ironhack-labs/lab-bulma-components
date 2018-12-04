import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navbar extends Component {
  render() {
    return (
    <nav>
      {this.props.message}

      <a href="#">Home</a>
      <a href="#">Login</a>
      <a href="#">Signup</a>

    </nav>
    );
  }
}


export default Navbar;
