import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
  render () {
        return (
          <nav className="navbar is-transparent">
                <div className="navbar-brand">
                  <a className="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" 
                      />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                    <a className="navbar-item">
                      Home
                    </a>
                  </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
          </nav>
      );
  }
}


export default Navbar;

