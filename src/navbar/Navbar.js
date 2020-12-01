import React from "react";
import 'bulma/css/bulma.css';
import './Navbar.css'

const Navbar = () => {
    return (
      <div className="nav-bar">
      <nav className="navbar is-transparent">
  <div classNameName="navbar-brand">
    <a classNameName="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" />
    </a>
    <div classNameName="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExample" classNameName="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button is-primary" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Signup 
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button" href="http://www.ironhack.com">
              <span className="icon">
              </span>
              <span>Login</span>
            </a>
          </p>
        </div>
      </div>
    </div>

</nav>
</div>
      );
    }

    export default Navbar; 