import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar is-transparent ">
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar">
            <a class="navbar-item" href="#">
              Home
            </a>
          </div>
        </div>
        
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" target="_blank" href="#">
                  <span>Login</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" target="_blank" href="#">
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
