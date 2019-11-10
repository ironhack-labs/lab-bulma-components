import React from 'react';
import CoolButton from '../CoolButton/CoolButton';

function Navbar() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton
                btnArray={['isBig', 'isSuccess', 'isPrimary']}
                className="my-class"
              >
                Sign up
              </CoolButton>
              <CoolButton btnArray={['isBig', 'isInfo']} className="my-class">
                Log in
              </CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
