import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            ></img>
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

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <a class="button is-danger is-rounded">
                  <span>Login</span>
                </a>
                <a class="button is-primary is-success">
                  <span>Sign up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
