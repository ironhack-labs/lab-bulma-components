import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import CoolButton from '../coolbutton/CoolButton';

const Navbar = () => {
  return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="#"
                    target="_blank"
                    href="#"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Login</span>
                  </a>
                  <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                  <CoolButton isSmall isDanger name="Login"/>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="#"
                  >
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
