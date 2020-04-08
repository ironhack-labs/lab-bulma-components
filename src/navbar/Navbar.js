// components/Navbar.js

import React from 'react';
import 'bulma/css/bulma.css';
import chichaLogo from '../assets/chicha-logo.gif';

function Navbar() {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={chichaLogo} alt="Home" width="79" height="28" />
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

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-info" href="">
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="">
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
