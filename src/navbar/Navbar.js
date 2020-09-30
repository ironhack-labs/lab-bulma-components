import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';

const Navbar = () => {
  return (
    <nav className='navbar is-transparent'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma logo' width='112' height='28' />
        </a>
      </div>
      <div className='navbar-start'>
        <a className='navbar-item' href='#'>
          Home
        </a>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='field is-grouped'>
            <CoolButton isInfo isRounded isSmall>Login</CoolButton>
            <CoolButton isPrimary isRounded isSmall>Signup</CoolButton>
            {/* <p className='control'>
              <a className='button is-info' href='#'>
                <span>
                  Login
                </span>
              </a>
            </p>
            <p className='control'>
              <a className='button is-primary'>
                <span>
                  Signup
                </span>
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;