import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './navbar.css'
import CoolButton from "./../coolbutton/coolbutton"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a href="https://www.google.com" className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
            />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="#" className="navbar-item">
              Home
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton isPrimary link="#">Login</CoolButton>
              </p>
              <p className="control">
                <CoolButton isPrimary link="#">Signup</CoolButton>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
