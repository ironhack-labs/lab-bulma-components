
import React from 'react'

import 'bulma/css/bulma.css'
import './Navbar.css'
//components
import CoolButton from '../button/CoolButton'
import Signup from '../signup/signup'

const NavBar = () => {

    return(
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"/>
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
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
              <CoolButton  className="button is-small is-danger is-rounded my-class" name='Login'></CoolButton>
          <p class="control">
             
              <a href={Signup}><CoolButton className="button is-small is-success" name='Signup'></CoolButton></a>                  
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
)
}

export default NavBar
