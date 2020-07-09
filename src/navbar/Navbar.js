import React, { Component } from 'react'
import './Navbar.css'
import CoolButton from '../coolbutton/CoolButton.js'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
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
          <CoolButton size='is-small' color ='is-danger' round ='is-rounded' myClass= 'my-class' name='Login' />
          </p>
          <p className="control">
          <CoolButton size='is-small' color ='is-primary' name='Signup' />
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar