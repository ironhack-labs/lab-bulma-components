import React from "react";
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from "../coolButton/CoolButton";

const Navbar = () => {
    return (
        <div>
     <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
          </a>
          <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div className="navbar-end">
  <div className="navbar-item">
    <div className="buttons">
      <CoolButton class="button is-light login">Log in</CoolButton>
      <CoolButton class="button is-primary">Sign up
      </CoolButton>
    </div>
  </div>
</div>

        </div>
      </nav>

        </div>
      );
};

export default Navbar;

