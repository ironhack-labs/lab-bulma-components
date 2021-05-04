import React from "react";
import "bulma/css/bulma.css";
import CoolButton from './../coolbutton/CoolButton';

const Navbar = () => {
  return (
    <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
<a class="navbar-item" href="https://bulma.io">
<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
</a>
<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
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
<CoolButton className="button is-rounded my-class is-danger is-small">Log In</CoolButton>
<CoolButton className="button is-small is-success">Sign Up</CoolButton>
</div>
</div>
</div>
</div>
</nav>
</div>
  );
};

export default Navbar;