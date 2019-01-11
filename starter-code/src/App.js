import React, { Component } from "react";
import "./App.css";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;