import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png"></img>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          {" "}
          <a className="navbar-item"> Home</a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <CoolButton className="button is-info" text="Login" />
            <CoolButton className="button is-primary" text="Signup" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;