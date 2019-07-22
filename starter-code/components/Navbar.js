import React, { Component } from "react";
import CoolButton from "./CoolButton";

class Navbar extends Component {

  render() {

    const navbar = (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Home
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <CoolButton className="button is-small is-danger is-rounded my-class">Login</CoolButton>
              <CoolButton className="button is-small is-success">Signup</CoolButton>
            </div>
          </div>
        </div>
      </nav>
    );

    return(
    <div className="Navbar">
      {navbar}
    </div>
    )

  }

}

export default Navbar;