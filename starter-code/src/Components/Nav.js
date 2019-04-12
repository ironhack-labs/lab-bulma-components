import React, { Component } from "react";
import Navbar from "./Navbar.js";
import NavItem from "./NavItem.js";
import Button from "./Button.js";
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
              <Button color="button is-light" name="Sing up" />
              <Button color="button is-primary" name="Log in" />
            </Buttons>
          </Navbar>
        </Navbar>
      </Navbar>
    );
  }
}

export default Nav;
