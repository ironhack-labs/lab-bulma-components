import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from "../coolbutton/CoolButton";


const Navbar = ({navbar}) => {
    return (
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
        <CoolButton name="Login" className="button is-rounded is-danger" />
        <CoolButton  name="Signup" href="/signup" className="button is-success" />
        </div>
      </div>
    </div>
  </div>
</nav>
)
};






export default Navbar;