import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="nav-bar">
          <div className="nav-left">
            <h1>BULMA</h1>
            <a href="#">Home</a>
          </div>
          <div className="nav-right">
            <a href="#">Login</a>
            <a href="#">Signup</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
