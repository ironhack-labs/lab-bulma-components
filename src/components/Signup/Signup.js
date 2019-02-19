import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="************" />
        <CoolButton />
      </div>
    )
  }
}

export default Signup;