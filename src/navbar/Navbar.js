import React from "react";
import "./Navbar.css"

import Coolbutton from "../coolbutton/Coolbutton";

export default function Navbar() {
  return (
    <nav className="navbar is-transparent is-flex is-align-items-center is-justify-content-space-between">
      <div className="navbar-brand is-flex is-align-items-center" >
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <span>Home</span>
      </div>
      <div className="buttons-container is-flex m-1">
        <Coolbutton classList="is-info m-1" text="Login" />
        <Coolbutton classList="is-primary m-1" text="Signup" />
      </div>
    </nav>
  );
}
