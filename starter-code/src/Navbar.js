import React, { Component } from "react";
import CoolButton from "./Coolbutton";

class Navbar extends Component {
  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io" />
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />

            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
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
                  <CoolButton />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
export default Navbar;
