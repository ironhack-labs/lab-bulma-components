import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolbuttons/CoolButton";

function Navbar(props) {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="../../img/bulma-logo.png"
            alt="buma-logo"
            width="112"
            heigth="28"
          ></img>
        </a>
        <a
          role="button"
          class="navbar-burguer"
          arial-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {/* <a class="button is-info">
                Login
              </a> */}
              <CoolButton className="button is-primary is-success" label="Login" />
              {/* <a class="button is-primary">
                Signup
              </a> */}
              <CoolButton className="button is-primary is-danger" label="Signup" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
