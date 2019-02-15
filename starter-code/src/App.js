import React, { Component } from "react";

import Navbar from "./Navbar.js";

import Formfield from "./Formfield.js";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <Formfield label="Password" type="text" placeholder="*****" />
      </div>

    )
  }
}

