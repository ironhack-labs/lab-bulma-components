import React, { Component } from "react";
import CoolButton from '../coolButton/coolButton';

export default class NavBar extends Component {
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
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div>
                  <p class="control">
                  <CoolButton className="is-rounded my-class button is-small is-danger">Login</CoolButton>
                  </p>
                </div>
                <div>
                  <p class="control">
                  <CoolButton className="is-small my-class is-rounded button is-success">SignUp</CoolButton>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
