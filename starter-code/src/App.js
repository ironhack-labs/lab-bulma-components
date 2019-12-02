import React, { Component } from "react";
import Signup from "./signup/Signup";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Signup></Signup>
        </div>
      </div>
    );
  }
}

export default App;