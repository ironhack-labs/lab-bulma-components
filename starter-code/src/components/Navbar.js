import React from "react";
import CoolButton from "./CoolButton.js";

class Navbar extends React.Component {
  render() {
    return (
      <div>
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
            />
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <CoolButton title1="Login" title2="Sign up" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
