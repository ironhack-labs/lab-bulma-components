import React, { Component } from "react";
import CoolButton from './CoolButton';

class Navbar extends Component {
  render() {
    return (
      <div className="container-navbar">
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
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="http://localhost:3000/">
                Home
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a
                      class="bd-tw-button button"
                      data-social-network="Twitter"
                      data-social-action="tweet"
                      data-social-target="http://localhost:4000"
                      target="_blank"
                      href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                    >
                      {/* <span class="icon">
                        <i class="fab fa-twitter" />
                      </span> */}
                      <CoolButton
                        nameButton='Login'
                        classs="button is-small is-success"
                      />
                    </a>
                  </p>
                  <p class="control">
                    <a
                      class="button is-primary"
                      href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip"
                    >
                      {/* <span class="icon">
                        <i class="fas fa-download" />
                      </span> */}
                      <CoolButton
                        nameButton='Singup'
                        classs="button is-rounded my-class is-danger is-small"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
