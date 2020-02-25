import React from 'react';
import CoolButton from './CoolButton'

function Navbar() {
    return (
        <div>

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
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        
        <div class="navbar-dropdown is-boxed">

          <hr class="navbar-divider"/>
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
              <span>
                Login
              </span>
          </p>
          <p class="control">
            <CoolButton isSmall isSuccess>Sign up</CoolButton>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

</div>
    )
}

export default Navbar;