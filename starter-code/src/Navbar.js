import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";

class Navbar extends React.Component {
  render() {
    return <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <CoolButton isSmall isDanger className="is-rounded my-class">Log in</CoolButton>
    <CoolButton isSmall isSuccess>Sign up</CoolButton>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>;
  }
}

export default Navbar;