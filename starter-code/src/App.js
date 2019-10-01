import React, { Component } from "react";
import Navbar from "../src/components/navbar.js";
import "./App.css";
import FormField from "./components/formField.js";
import Signup from "./components/signup.js";
import Message from "./components/message.js";
import Container from "./components/container.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        {/* <Signup/> */}
        {/* <Message className="info" title="Hello!" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem." /> */}
        {/* <Container content = "HI" /> */}
      </div>
    );
  }
}

export default App;