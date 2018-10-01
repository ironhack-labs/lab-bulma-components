import React from "react";
import CoolButton from "./CoolButton";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png"  width="112" height="28"/></a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample"/>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="">Home</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item" href="">
            <CoolButton isInfo>Login</CoolButton>
          </div>
          <div className="navbar-item">
            <CoolButton isPrimary>Signup</CoolButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;