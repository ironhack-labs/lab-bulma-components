import React from 'react'
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';
const Navbar = () => {
  return (

    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
        </a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <div className="control">
              <CoolButton isInfo className="my-class">Login</CoolButton>           
            </div>
            <div className="control">
              <CoolButton isPrimary className="my-class">Signup</CoolButton>           
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar