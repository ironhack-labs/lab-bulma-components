import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class App extends Component {
    render() {
      return (
        <div>
          <Nav></Nav>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="xxxxxxx" />
          <CoolButton  className=" button is-rounded my-class is-light">Submit</CoolButton>
        </div>
      );
    }
  }
  
  export default App;