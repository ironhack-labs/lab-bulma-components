import React, { Component } from 'react';
import Navbar from './Navbar';
import CoolButton from './CoolButton';
import FormField from "./FormField";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton>Signup</CoolButton>
      </div>
    )
  }
}
