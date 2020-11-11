import React from "react";
import CoolButton from "../coolButton/CoolButton";
import "bulma/css/bulma.css";

function NavBar(props) {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="120"
            height="auto"
          />
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            <CoolButton info className="is-info">Login</CoolButton>
            <CoolButton info className="is-primary">Signup</CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
