import React from "react";
import "bulma/css/bulma.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar is-transparent">
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
              <a className="button is-primary">
                <strong>Login</strong>
              </a>
              <a className="button is-light">Signup</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
