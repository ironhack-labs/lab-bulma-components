import React, { Component } from "react";
// import Navbar from "./Navbar";
// import FormField from "./FormField";
import Signup from "./Signup"


export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Signup></Signup>
      </div>
    );
  }
}
