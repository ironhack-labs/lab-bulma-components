import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
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
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <CoolButton title1="Login" title2="Sign up" />
              <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
              <CoolButton isSmall isSuccess> Sign up </CoolButton>
            </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;