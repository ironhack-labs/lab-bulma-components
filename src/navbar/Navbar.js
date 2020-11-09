import React from "react";
import 'bulma/css/bulma.css';
import Coolbutton  from "../coolbutton/Coolbutton.js"

function Navbar (props){
    return <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io"></a>
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <Coolbutton isSuccess>Login</Coolbutton>
            </p>
            <p class="control">
            <Coolbutton isDanger>Signup</Coolbutton>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
}
export default Navbar;