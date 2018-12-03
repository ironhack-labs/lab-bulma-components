import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password"/>
        <CoolButton text="Submit" class="submit"/>  
      </div> 
    );
  }
}

export default Signup;