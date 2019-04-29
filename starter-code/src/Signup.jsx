import React, { Component } from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <FormField label="Name" type="text" placeholder="Write your name"></FormField>
        <FormField label="Email" type="email" placeholder="Your email address"></FormField>
        <FormField label="Password" type="password" placeholder="Your password"></FormField>
        <CoolButton isInfo isLarge>Sign up</CoolButton>
      </div>
    )
  }
}
