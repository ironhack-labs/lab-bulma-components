import React from "react";
import "./navbar.css";
import CoolButton from "../Button/Button";

export default function navbar(props) {
  return (
    <div
      className="Navbar 
    has-navbar-fixed-top"
    >
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              alt="img"
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Home
            </a>

            <a href="/" class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/">
                More
              </a>

              <div class="navbar-dropdown">
                <a href="/" class="navbar-item">
                  About
                </a>
                <a href="/" class="navbar-item">
                  Jobs
                </a>
                <a href="/" class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a href="/" class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <CoolButton className="button is-primary" nameB="SignUp" />
              <CoolButton className="button is-light" nameB="Log In" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
