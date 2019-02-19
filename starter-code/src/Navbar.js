import React, { Component } from "react";
import CoolButton from "./Button";

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
              <p className="control">
                <CoolButton isSmall isDanger className="is-rounded my-class">
                  Login
                </CoolButton>
                <CoolButton isSmall isSuccess>
                  <a href="/src/Signup.js">SignUp</a>
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
