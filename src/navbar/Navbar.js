import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolButton/CoolButton";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <CoolButton
                className="button is-small is-success"
                data="Sign up"
              />
              <CoolButton
                className="button is-rounded my-class is-danger is-small"
                data="Log in"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
