import React, {Component} from "react";
import Signup from "../Signup/Signup";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Signup></Signup>
      </div>
    );
  }
}


