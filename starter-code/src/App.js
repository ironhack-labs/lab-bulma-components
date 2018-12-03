import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}

export default App;