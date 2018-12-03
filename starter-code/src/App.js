import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import "../public/stylesheet/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
