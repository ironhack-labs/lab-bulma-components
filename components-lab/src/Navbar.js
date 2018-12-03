import React, { Component } from 'react';
import './App.css';
import CoolButton from "./CoolButton.js"

class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
        <a href="#">Home</a>
        <div id="rightNav">
        <CoolButton text="Login" class="login"/>
        <CoolButton text="Sign up" class="signup"/>
        </div>
      </div>
    );
  }
}


export default Navbar;