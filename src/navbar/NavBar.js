import React from "react";
import "./NavBar.css";
import CoolButton from "../CoolButton/CoolButton";

const Navbar = () => (
  <div>
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        ></div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton color="is-info">Login</CoolButton>
              </p>
              <p className="control">
                <CoolButton>Sign up</CoolButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
