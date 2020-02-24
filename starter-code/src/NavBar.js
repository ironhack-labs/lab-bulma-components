import React, { Component } from "react";
import CoolButton from "./CoolButton";

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/></a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">Home</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">Docs</a>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">  
                  <CoolButton className="button is-success is-rounded my-class">Login</CoolButton>
                  <CoolButton className="button is-danger">Sign Up</CoolButton>
                </div>
              </div>
            </div>
          </div>
          </nav>
    );
  }
}

export default NavBar;