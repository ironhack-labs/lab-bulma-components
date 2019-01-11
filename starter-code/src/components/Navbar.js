import React, { Component } from "react";
import CoolButton from "./CoolButton.js";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton className="button is-small is-success">
                  Signup
                </CoolButton>
              </p>
              <p className="control">
                <CoolButton className="button is-small is-success">
                  Login
                </CoolButton>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
