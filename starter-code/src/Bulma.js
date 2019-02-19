import React from 'react';
import CoolButton from "./CoolButton.js";

function Bulma() {
  return (
    <div>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
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
            <a class="navbar-item" href="">
              Home
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <CoolButton class='isDanger' text='Login' />
                </p>
                <p class="control">
                  <CoolButton class='isSuccess' text='Signup' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Bulma;
