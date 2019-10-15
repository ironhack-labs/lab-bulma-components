import React, { Component } from 'react';
import CoolButton from './Button.js';
import Container from './Container.js';

class Navbar extends Component {
  render() {
    return(
    <nav className="navbar is-transparent">
      <Container>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">Home</a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <CoolButton >Login</CoolButton>
            <CoolButton isPrimary>Signup</CoolButton>
          </div>
        </div>
      </div>
      </Container>
    </nav>
    )}
}

export default Navbar;