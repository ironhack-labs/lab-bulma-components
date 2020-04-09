import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../coolbutton/CoolButton';


function navbar () {
  return (
    <nav class="nav navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
            <CoolButton isSmall isDanger className="is-rounded my-class" button1="Login" button2="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar; 