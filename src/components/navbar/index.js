import React from 'react';
import 'bulma/css/bulma.css';
import './style.css';
import CoolButton from '../CoolButton';

function Navbar(props) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton className="bd-tw-button button">
                  {/* <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span> */}
                  Login
                </CoolButton>
              </p>
              <p className="control">
                <CoolButton className="button is-primary">
                  {/* <span className="icon">
                    <i className="fas fa-download"></i>
                  </span> */}
                  Signup
                </CoolButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;