import React from 'react'

import './Navbar.css'
import 'bulma/css/bulma.css'

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/>
        </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='/'>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href='/'>
              Home
            </a>
      </div>
      
      <div class="navbar-end">
          <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-danger" href='/'><strong>Sign up</strong></a>
                  <a class="button is-success" href='/'>Log in</a>
                </div>
              </div>
            </div>
          </div>
</nav>
  )
}

export default Navbar