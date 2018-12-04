import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar navbar is-transparent">
      
        <ul>
          <li><a href="#" target="_blank">Home</a></li>
          <li><a href="#" target="_blank">Login</a></li>
          <li><a href="#" target="_blank">Signup</a></li>
        </ul>
      </nav>

    );
  }
}

export default Navbar;