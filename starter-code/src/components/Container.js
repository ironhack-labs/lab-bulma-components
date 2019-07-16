import React, { Component } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Message from "./Message";

export default class Container extends Component {
  render() {
    return (
      <div>
      <header>
        <Navbar/>
        </header>
        <Signup/>
        <Message/>
    </div>
    )
  }
}



