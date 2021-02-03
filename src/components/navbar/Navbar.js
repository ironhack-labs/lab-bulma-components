import "bulma/css/bulma.css";
import "./Navbar.css";
import CoolButton from "../coolbutton/CoolButton";
import React from "react";
import Signup from "../signup/Signup";

function NavMenu() {
  return (
    <header>
      <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand container is-justify-content-space-between is-transparent">
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
            <CoolButton
              text="Login"
              click="#"
              class="is-primary mr-2 mt-1"
            ></CoolButton>
            <CoolButton
              text="Signup"
              click="#"
              class="is-info ml-2 mt-1"
            ></CoolButton>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
