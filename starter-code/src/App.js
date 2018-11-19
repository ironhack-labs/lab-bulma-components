import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form />
        <Container />
      </div>
    );
  }
}

export default App;
