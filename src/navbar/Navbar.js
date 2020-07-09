import 'bulma/css/bulma.css';
import React, { Component } from 'react'
import CoolBtn from '../coolBttn/CoolBtn'

export default class Navbar extends Component {
    render() {
        return (
          <div>
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
                  <a className="navbar-item" href="/">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable"></div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="field is-grouped">
                    <p class="control">
                      <CoolBtn label="Log in" details="button is-success"/>
                    </p>
                    <p class="control">
                      <CoolBtn label="Sign up" details="button is-link" />
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
