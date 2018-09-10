import React from "react";
import logo from "../resources/doge1.jpeg";

class NavBar2 extends React.Component {
  render() {
    return (
<nav className="navbar is-transparent is-info">
<div className="navbar-brand">
  <a className="navbar-item" href="#">
    <img className="image is-light" src={logo} alt="Bulma: a modern CSS framework based on Flexbox"  color="white"/>
  </a>
  <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<div id="navbarExampleTransparentExample" className="navbar-menu">
  <div className="navbar-start">
    <a className="navbar-item" href="#">
    <span className="has-text-weight-bold">
      Home
    </span>
    </a>
    <div className="navbar-item has-dropdown is-hoverable">
      
      <div className="navbar-dropdown is-boxed">
        <a className="navbar-item" href="/documentation/overview/start/">
          Overview
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
          Modifiers
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
          Columns
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
          Layout
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
          Form
        </a>
        <hr className="navbar-divider"/>
        <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
          Elements
        </a>
        <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
          Components
        </a>
      </div>
    </div>
  </div>

  <div className="navbar-end">
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a className="button is-light" href="#">
           
            <span className="has-text-weight-bold">Signup</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</nav>
    );
}
}

export default NavBar2;