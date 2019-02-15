import React, { Component } from "react";
import "bulma/css/bulma.css";

import CoolButton from "./CoolButton.js";

class Navbar extends Component {
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

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <CoolButton isSmall isPrimary className="is-rounded my-class">
          Sign Up
        </CoolButton>
        <CoolButton isSmall isSuccess className="is-rounded my-class">
          Login
        </CoolButton>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
