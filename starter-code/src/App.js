import React, { Component } from "react";
// import Navbar from "./Navbar";
// import FormField from "./FormField";
import Signup from "./Signup";
// import CoolButton from "./CoolButton";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Signup/>
      </div>
    );
  }
}
