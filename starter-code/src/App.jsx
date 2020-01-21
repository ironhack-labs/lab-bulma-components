import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton"
import Signup from "./Signup"
import Message from "./Message"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
        <hr/>
        <Signup />
        <Message />
      </div>
    );
  }
}



export default App;