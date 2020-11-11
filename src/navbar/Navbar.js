import React from "react";
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
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
        </div>
      </div>
      <div className="navbar-menu is-active">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-info">Login</a>
              <a class="button is-primary">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
