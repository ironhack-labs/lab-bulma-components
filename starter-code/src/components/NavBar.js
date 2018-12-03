import React from "react";

export default class NavBar extends React.Component{
  render(){
      return (
        <div>

        <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Login
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Signup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>


        </div>
      )
  }
}