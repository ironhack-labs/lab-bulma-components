import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({message}) => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
                </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="bd-tw-button button is-info" target="_blank" href="/">
                        <span>
                          Login
                        </span>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-primary">
                        <Link to="/signup">Signup</Link>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </nav>
    )
}

export default Navbar
