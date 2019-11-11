import './nav-bar.css'
import React from "react";
// ^ this is always needed for any react components
import CoolButton from "../cool-button/cool-button"

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
                <CoolButton className="is-info">Login</CoolButton>
                <CoolButton className="is-primary">Sign Up</CoolButton>
              </div>
            </div>
          </div>
        </div>
        
      </nav>
    );
  }
}

export default NavBar;