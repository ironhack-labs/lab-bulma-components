import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp.js";
import Message from "./Message.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <SignUp />
      <br />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      </div>
    );
  }
}

export default App;
