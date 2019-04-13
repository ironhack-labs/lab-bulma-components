import React, { Component } from "react";
import Navbar from "./Navbar.js";
import NavItem from "./NavItem.js";
import CoolButton from "./CoolButton.js";
import Buttons from "./Buttons.js";

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar type="-brand">
          <NavItem href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </NavItem>
        </Navbar>
        <Navbar type="-start">
          <NavItem>Home</NavItem>
        </Navbar>
        <Navbar type="-end">
          <Navbar type={"-item"}>
            <Buttons>
              <CoolButton isBlue name="Login" />
              <CoolButton isPrimary name="Sing up" />
            </Buttons>
          </Navbar>
        </Navbar>
      </Navbar>
    );
  }
}

export default Nav;
