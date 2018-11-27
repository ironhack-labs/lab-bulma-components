import React, { Component } from "react";
import CoolButton from './CoolButton';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <CoolButton className="button is-primary">Sign up </CoolButton>
                <CoolButton className="button is-light">Sign up </CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
