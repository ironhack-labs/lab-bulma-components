import React from 'react';
import Button from '../coolButtons/Button'

import './Navbar.css'



const Navbar = () => {
  return (
    <>
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"/>
            </a>
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div>
          <Button buttonClass={'button is-info'} buttonName={'Login'}/>
          <Button buttonClass={'button is-primary'} buttonName={'Signup'}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
