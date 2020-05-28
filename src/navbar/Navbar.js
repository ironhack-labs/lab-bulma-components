import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../CoolButton/CoolButton";

function Navbar() {
  return (
    <nav className="navbar is-transparent is-spaced">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <CoolButton className="button my-class is-link is-small">
                    Login
                  </CoolButton>
                </p>
                <p className="control">
                  <CoolButton className="button is-small is-primary">
                    Signup
                  </CoolButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
