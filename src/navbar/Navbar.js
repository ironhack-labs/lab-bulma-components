import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import Coolbutton from '../coolButton/Coolbutton';

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
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <Coolbutton type="button" clasesDelBoton="button is-outlined" href="/login" text="Login"/>
          </p>
          <p className="control">
            <Coolbutton type="button" clasesDelBoton="button is-primary" href="/signup" text="Sign Up"/>
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