import React, { Component } from "react";
import CoolButton from "./CoolButton";
import { classes,buttons } from "./props";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a
                  className="navbar-link"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Docs
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/overview/start/"
                  >
                    Overview
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/modifiers/syntax/"
                  >
                    Modifiers
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/columns/basics/"
                  >
                    Columns
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/layout/container/"
                  >
                    Layout
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/form/general/"
                  >
                    Form
                  </a>
                  <hr className="navbar-divider" />
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/elements/box/"
                  >
                    Elements
                  </a>
                  <a
                    className="navbar-item is-active"
                    href="https://bulma.io/documentation/components/breadcrumb/"
                  >
                    Components
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    {buttons(
                      [classes.isPrimary, classes.isSuccess, classes.isLarge],
                      "LOGIN"
                    )}
                  </p>
                  <p className="control">
                    {buttons(
                      [classes.isDanger, classes.isRounded, classes.isLarge],
                      "SIGNUP"
                    )}
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


export default NavBar;
