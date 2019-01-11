import React, { Component } from "react";

export default class NavBurger extends Component {
  render() {
    return (
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    );
  }
}
