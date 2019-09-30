import React, { Component } from "react";
import CoolButton from './../CoolButton/CoolButton'
import "./navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <CoolButton isPrimary><strong>Sign up</strong></CoolButton>
                <CoolButton isLight><strong>Log in</strong></CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
