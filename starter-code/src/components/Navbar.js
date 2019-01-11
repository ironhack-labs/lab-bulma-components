import React, { Component } from "react";
import NavMenu from "./navbar/NavMenu";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { showMenu: true, showCross: true };
  }

  onClick = () => {
    this.setState({
      showMenu: !this.state.showMenu,
      showCross : !this.state.showCross
    });
  };

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>

        {/* toggle is-active class for show the side menu and cross simbol in mobile */}
        {this.state.showCross ? (
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.onClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        ) : (
          <a
            role="button"
            className="navbar-burger is-active"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.onClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        )}
           {/* toggle menu view */}
        {this.state.showMenu ? <NavMenu /> : <NavMenu isActive />}
      </nav>
    );
  }
}
