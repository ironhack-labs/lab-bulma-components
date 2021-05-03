import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import CoolButton from "../coolbutton/CoolButton";

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
              <CoolButton isSmall isInfo isOutlined className="is-rounded" name="Login" />
              <CoolButton isSmall isDark isOutlined className="is-rounded" name="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
