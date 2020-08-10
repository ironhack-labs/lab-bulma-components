import "bulma/css/bulma.css";
import React from "react";
import CoolButton from "./../buttons/CoolButton";

const Navbar = () => {
  return (

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
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
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
            <div className="navbar-item has-dropdown is-hoverable">
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                <CoolButton className="bd-tw-button button">
                    Log In
                </CoolButton>
                </p>
                <p className="control">
                <CoolButton className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip">
                    Sign Up!
                </CoolButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;
