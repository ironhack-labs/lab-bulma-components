import React, { Component } from 'react';
import Navbar from './navbar';
import FormField from './formField';
import CoolButton from './coolButton';

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="signUp">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSmall isSuccess className="is-rounded my-class">Sign Up</CoolButton>
        </div>
      </div>
    );
  }
}

export default SignUp;
