import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma"
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
           
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" target="_blank">
                    <span>Login</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary">
                    <span>Sign Up</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </nav>
  );
};
