import React from "react";
import "./Nav.css";
import CoolButton from '../coolButton/CoolButton'

const Nav = () => {
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
      
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                className="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://bulma.io"
                target="_blank"
                href="#"
              >
                <span className="icon">
                  <i className="fab fa-login"></i>
                </span>
                <CoolButton  className="button is-small is-danger is-rounded my-class" name="Login"/>
              </a>
            </p>
            <p className="control">
              <a className="button is-primary" href="#">
                <span className="icon">
                  <i className="fas fa-signup"></i>
                </span>
                <CoolButton  className="button is-small is-danger is-rounded my-class" name="Signup"/>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
