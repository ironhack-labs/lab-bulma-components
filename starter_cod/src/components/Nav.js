import React, { Component } from "react";
import Links from "./Links";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar isTransparent">
          <Links />
        </nav>
      </div>
    );
  }
}

export default Nav;
