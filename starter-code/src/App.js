import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Message from "./components/Message";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Signup />
        <Message />
      </div>
    );
  }
}

export default App;
