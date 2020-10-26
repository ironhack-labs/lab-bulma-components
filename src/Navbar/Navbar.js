import React from 'react'
import CoolButton from '../CoolButton/CoolButton';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      </div>
      </div>
   

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <div className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                <CoolButton isSmall isDanger className="is-rounded my-class" text="Login"></CoolButton>
              </span>
            </a>
          </div>
          <div className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.1/bulma-0.9.1.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>
              <CoolButton isSmall isSuccess text="Signup"></CoolButton>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
        </div>
    )
}
