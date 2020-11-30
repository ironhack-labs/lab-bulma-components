import React from "react";
import CoolButton from "../buttons/Buttons";
import 'bulma/css/bulma.css'

const Navbar = () => {
  return (
    <div className="Navbar">
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
            <a class="navbar-item" href="#">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                <CoolButton class="button is-rounded my-class is-danger is-small" name="Log In" />
                </p>
                <p class="control">
                <CoolButton class="button is-small is-success" name="Sign up" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
