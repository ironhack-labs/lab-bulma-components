import React from 'react';
import 'bulma/css/bulma.css';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar is-light is-transparent'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='#'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                alt='Bulma: a modern CSS framework based on Flexbox'
                width='112'
                height='28'
              />
            </a>
            <div className='navbar-burger burger' data-target='navbarExampleTransparentExample'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id='navbarExampleTransparentExample' className='navbar-menu'>
            <div className='navbar-start'>
              <a className='navbar-item' href='#'>
                Home
              </a>
              </div>
            </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              <a className="button is-info">
                Log in
              </a>
              <a className="button is-primary">
                Signup
              </a>
            </div>
           </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;