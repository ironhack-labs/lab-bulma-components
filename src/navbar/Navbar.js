import React from 'react'
import CoolButton from '../coolbutton/CoolButton';

function Navbar(){
        return (
            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      </div>

      <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
              <span>
              <CoolButton isSmall isDanger className="is-rounded my-class" name={'Sign up'}></CoolButton>
              </span>
          </p>
          <p className="control">
              <span>
              <CoolButton isSmall isSuccess name={'Log in'}></CoolButton>
              </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar