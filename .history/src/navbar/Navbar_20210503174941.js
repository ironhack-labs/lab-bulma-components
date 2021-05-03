import React from 'react';
import './Navbar.css';
import CoolButton from '../coolbutton/CoolButton'
import 'bulma/css/bulma.css';


function Navbar () {
    return (
        <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span><CoolButton buttonName="Signup" classes="button is-rounded my-class is-danger is-small" /></span>
      <span><CoolButton buttonName="Login" classes="button is-small is-success" /></span>
    </div>
  </div>
</nav>

    )
} 

export default Navbar;