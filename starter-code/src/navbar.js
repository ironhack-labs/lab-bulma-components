import React from "react";

export const Navbar = () => {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          </div>
           
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" target="_blank">
                    <span>Login</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary">
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
