import React, { Component } from "react";
import "./App.css";


import Signup from "./components/Signup/Signup";
import Message from "./components/Message/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />

        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default App;