import "bulma/css/bulma.css";
import "./Navbar.css";
import React from "react";

function NavMenu() {
  return (
    <nav className="navbar is-transparent is-fixed-top ">
      <div className="navbar-brand container is-justify-content-space-between">
        <div className="navbar-start">
          <a className="navbar-item" href="/home">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <a className="navbar-item" href="/home">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <a className="button is-primary mr-2" href="/login">
            Login
          </a>
          <a className="button is-info ml-2" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
