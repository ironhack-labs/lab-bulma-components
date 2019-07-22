import React, { Component } from 'react';
import Navbar  from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class SignUp extends Component {

    render(){
  
    return (

  <div>
  <Navbar />
  
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <FormField label="password" type="password" placeholder="password" />
  
  <CoolButton isSmall isDanger is-rounded  name="Button 1"></CoolButton>
  
  
  </div>
  
  
    );
  
    }
  }







export default SignUp;