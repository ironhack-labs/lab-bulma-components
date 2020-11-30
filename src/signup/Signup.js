import React, { Component } from 'react';
import FormField from './../formfield/FormField';
import CoolButton from './../coolbutton/CoolButton';

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          
          <FormField label="Name" inputType="text" placehoder="Enter Your Name" />
          
          <FormField label="Email" inputType="email" placehoder="Enter Your Email" />
          
          
          <CoolButton isSuccess>Sign Up</CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup;