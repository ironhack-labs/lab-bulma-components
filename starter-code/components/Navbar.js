import React from 'react'

function Nav() {

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" href="#">
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="#">
                  <span>Sign Up</span>
                </a>
              </p>
            </div>
          </div>
        </div>
  </nav>
)}

  export default Nav  