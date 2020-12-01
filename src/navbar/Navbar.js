import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">

      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" style={{ width: 112, height: 28 }} />
        </a>
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

            <CoolButton isInfo >
              Login
            </CoolButton>

            <CoolButton isPrimary >
              Signup
            </CoolButton>
            
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
