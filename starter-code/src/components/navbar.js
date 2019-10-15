import React, { Component } from "react";
import CoolButton from "./CoolButton.js";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <CoolButton isSmall isInfo className=" my-class">
                    Login
                  </CoolButton>
                  <CoolButton isSmall isPrimary>
                    SignUp
                  </CoolButton>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
