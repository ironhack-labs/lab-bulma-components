import React from 'react';
import CoolButton from "../coolbutton/Coolbutton";
import 'bulma/css/bulma.css';

const Navbar = () => {
    return (
<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
        <CoolButton label="Sign Up!" />
        <CoolButton label="Login" />
        </div>
      </div>
    </div>
</nav>
    )
}

export default Navbar;