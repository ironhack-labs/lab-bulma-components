import React, { Component } from "react";

export default class Barra extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-link">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
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
              <a className="navbar-item is-primary" href="https://bulma.io/">
                Login
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                SignUp
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
