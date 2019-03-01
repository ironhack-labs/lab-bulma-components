import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" />
          <CoolButton isSmall isPrimary>Sign Up</CoolButton>
        </div>
      </React.Fragment>
    );
  }
}