
import React from 'react'
import 'bulma/css/bulma.css';
import CoolButton from "../coolbutton/CoolButton"
const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                <a>
                    <CoolButton isSmall isDanger isRounded name="Login"/>
                </a>
                </p>
                <p className="control">
                <a>
                    <CoolButton isSmall isSuccess name="Signup"/>
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