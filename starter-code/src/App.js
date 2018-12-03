import React, { Component } from "react";
import "./App.css";
import  Navbar from "./components/navbar.js";
import  FormField from "./components/formField.js";



class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <FormField/>
       
      </div>
    );
  }
}

export default App;
