import React      from 'react';
import CoolButton from './CoolButton';

const NavBar = ({login, signup}) => (
  <nav className="navbar is-transparent container">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
      <div className="navbar-burger burger" data-target="main-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="main-menu" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <CoolButton className={login}>Login</CoolButton>
            </p>
            <p className="control">
              <CoolButton className={signup}>Signup</CoolButton>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;