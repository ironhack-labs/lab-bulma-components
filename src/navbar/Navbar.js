import React from "react";
import CoolButton from "../coolbutton/CoolButton";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a href="#" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo image" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu" id="navbarExample">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="field is-grouped">
            <CoolButton className="is-info" text="Login" />
            <CoolButton text="Signup" is-primary />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
