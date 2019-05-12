import React, { Component } from "react";
import Signup from "./Signup.js"
import Container from "./Container.js";
import "./Container.css";

class App extends Component {

  render() {
    return (
      <div>
        <Signup />
        <Container className="Container"/>
      </div>

    )
  }
}

export default App;