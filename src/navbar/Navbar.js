import React from "react";
import 'bulma/css/bulma.css';

const navBar = () => {
    return (

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
</a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>


  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>
  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div classNaqme="buttons">
          <a className="button is-info">
          Login
          </a>
          <a className="button is-primary">
          Signup
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)
};

export default navBar;