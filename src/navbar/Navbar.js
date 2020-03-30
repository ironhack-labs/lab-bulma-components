import React from 'react';
//import CoolButton from './coolbutton/CoolButton.js';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  Home
                </a>
              </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" data-social-network="" data-social-action="" data-social-target="https://bulma.io" target="_blank" href="">
                      <span className="icon">
                        <i className="fab fa-login" />
                      </span>
                      <span>
                        Login
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary" href="">
                      <span className="icon">
                        <i className="fas fa-signup" />
                      </span>
                      <span>Signup</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;