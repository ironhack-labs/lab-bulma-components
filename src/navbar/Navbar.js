import React, { Fragment } from "react";
import "bulma/css/bulma.css";

import CoolButton from "../button/CoolButton";
import Signup from "../signup/signup";

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                    <button className="button is-primary">Login</button>
                </p>
                <p className="control">

                    <button className="button is-link">Signup</button>
                
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
