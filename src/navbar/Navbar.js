import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import CoolButton from "../coolbutton/CoolButton";

const Navbar = () => {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
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
                <CoolButton isSmall isDanger isOutlined className="is-rounded" name="Login">Login</CoolButton>
                <CoolButton isSmall isSuccess isOutlined className="is-rounded" name="Sign up">Sign up</CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;