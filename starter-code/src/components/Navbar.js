import React, { Component } from "react";
import "../App.css";
import CoolButton from "./CoolButton.js";

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
              </p>
              <p className="control">
                <CoolButton isSmall isSuccess>Signup</CoolButton>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;