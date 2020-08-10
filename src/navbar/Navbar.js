import React from "react";
import "./Navbar.css";
import CoolButton from "../CoolButton/CoolButton";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent is-light">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />{" "}
        </a>
        <div className="navbar-start">
          <div className="navbar-item">Home</div>
        </div>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton className="button is-info">Login</CoolButton>
              <CoolButton className="button is-primary">Signup</CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
