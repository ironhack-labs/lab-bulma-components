import React, { Component } from 'react';
import CoolButton from "./CoolButton";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <CoolButton >Login</CoolButton>
                  </p>
                  <p className="control">
                    <CoolButton>Signup</CoolButton>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
