import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton'

class Navbar extends Component{
  render () {
    return(

      <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
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

            <CoolButton class="button bd-tw-button">Log In</CoolButton>
      </div>

      <div className="navbar-item">
          <CoolButton class="button is-danger">STAY AWAY</CoolButton>
            
        

      </div>
      </div>
</nav>

  )
  }
}

export default Navbar;