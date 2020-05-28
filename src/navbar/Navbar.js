import React from "react";
import 'bulma/css/bulma.css';
import Button from '../button/button';

function NavBar() {
    return <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <Button className="button is-warning" button="LogIn"></Button>
      <Button className="button is-success is-rounded" button="Sign Up"></Button>

      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    
  </nav>;
  }
   
  export default NavBar;