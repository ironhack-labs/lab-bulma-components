import './nav-bar.css'
import React from "react";
// ^ this is always needed for any react components

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent">

        {/* Bulma Logo */}
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
          {/* left side of nav-bar */}
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          {/* right side of nav-bar */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info" href="https://bulma.io/">
                    Login
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://bulma.io/">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </nav>
    );
  }
}

export default NavBar;