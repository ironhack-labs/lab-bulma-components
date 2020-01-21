import React, { Component } from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

class Signup extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="signup_container">
        <Navbar />
        <FormField label="Name" type="text"/>
        <FormField label="Email" type="email"/>
        <FormField label="Password" type="password"/>
        <CoolButton>Submit</CoolButton>
      </div>
    )
  }
}

export default Signup;