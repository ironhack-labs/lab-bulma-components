// navbar/Navbar.js

import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';
import './Navbar.css';
import chichaLogo from '../assets/chicha-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar is-light'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img id='logo' src={chichaLogo} alt='Home' width='79' height='28' />
        </a>
        <div className='navbar-burger burger' data-target='navbarExampleTransparentExample'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id='navbarExampleTransparentExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href='/'>
            Home
          </a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>    
                <CoolButton isInfo>
                  Login
                </CoolButton>
              </p>
              <p className='control'>
                <CoolButton isPrimary>
                  Signup
                </CoolButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
