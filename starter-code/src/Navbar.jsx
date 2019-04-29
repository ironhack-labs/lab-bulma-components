import React, { Component } from 'react';
import CoolButton from './CoolButton';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                  </div>
                  <div className="control">
                    <CoolButton isSmall isSuccess>Button 2</CoolButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
