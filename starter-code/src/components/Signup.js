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
        <FormField label="Name" type="text" placeholder="e.g Alex Smith QB" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
        <CoolButton className='button is-rounded my-class is-link is-small'>Submit</CoolButton>
      </div>
    )
  }
}

export default Signup;