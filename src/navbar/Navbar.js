import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolbutton/CoolButton";

function Navbar(props) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <CoolButton isSmall isDanger className="is-rounded my-class">
                Log In
              </CoolButton>
            </p>
            <p className="control">
              <CoolButton isSmall isSuccess>
                Sign up
              </CoolButton>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
