import React, { Component } from 'react'
import './Navbar.css';
import CoolButton from "./CoolButton";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
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
       
           
        <CoolButton className="button is-rounded my-class is-danger is-small" name="Login"></CoolButton>
        <CoolButton className="button is-small is-success" name="Sign up"></CoolButton>
           
        </div>
    </div>
  </div>
</nav>
      
    )
  }
}
