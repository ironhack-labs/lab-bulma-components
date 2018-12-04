import React, { Component } from "react";
import "./App.css";
import  Navbar from "./components/navbar.js";
import  FormField from "./components/formField.js";
import  CoolButton from "./components/coolButton.js";
import  Signup from "./components/signup.js";



class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <FormField/>
        <CoolButton/>
        
       
      </div>
    );
  }
}

export default App;
