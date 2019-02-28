import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Container extends Component {
  render() {
    return (
      <div className="Container"> 
      {this.props.children}
      </div>
    );
  }
}

export default Container;
