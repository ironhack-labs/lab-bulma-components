import React, { Component } from "react";
import CoolButton from "./CoolButton.js";

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar is-transparent">
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              {/* <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                  Docs
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
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
              </div> */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                  <CoolButton isInfo>Login</CoolButton> 
                  </p>
                  <p className="control">
                  <CoolButton isPrimary>SignUp</CoolButton> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}


export default Navbar;