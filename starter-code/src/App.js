import React, { Component } from "react";
import Signup from "./components/Signup";
import Message from "./components/Message";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Signup />
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </React.Fragment>
    );
  }
}

export default App;
