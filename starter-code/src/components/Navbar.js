import React from "react";

const Navbar = () => {
  return (
    <header className="App-header">
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
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          ></div>
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
                <a className="bd-tw-button button is-info">
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
