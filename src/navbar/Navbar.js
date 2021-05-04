import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          Home
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <CoolButton isPrimary>Login</CoolButton>
            </p>
            <p className="control">
              <CoolButton isSuccess>Signup</CoolButton>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;