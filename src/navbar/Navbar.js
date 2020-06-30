import React, { Component } from 'react';
import CoolButton from '../coolbutton/CoolButton'

import 'bulma/css/bulma.css';

class Navbar extends Component {


  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <CoolButton isSuccess buttonText='Sign up' />
          <CoolButton isLight buttonText="Login" />
        </div>
      </div>
    </div>
  </div>
</nav>
    );
  }
}

export default Navbar;