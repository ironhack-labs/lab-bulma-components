import React, { Component } from "react";
import CoolButton from "../coolButton/coolButton";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <CoolButton className=" button is-rounded my-class is-small is-danger">
                  Button 1
                </CoolButton>

                <CoolButton className="button is-small is-success" isSuccess>
                  Button 2
                </CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
