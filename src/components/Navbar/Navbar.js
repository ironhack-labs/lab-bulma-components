import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar is-transparent has-background-white-ter">
  <div className="navbar-brand">
    <a className="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button is-info">
              <span>
                Login
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary">
              <span>Singup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
)
}

export default Navbar;