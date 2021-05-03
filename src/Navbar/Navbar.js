import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css"
import CoolButton from "../coolButton/CoolButton"

function Navbar() {
    return (
      <nav className="navbar is-transparent">
        <div className="nav1">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>
        <div className = "buttons">
          <CoolButton class="button is-primary" />
          <button className="greenbtn"  class="button is-info">
            Info
          </button>
        </div>
      </nav>
    );
}

export default Navbar;