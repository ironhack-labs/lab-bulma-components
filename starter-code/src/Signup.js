import React, { Component } from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButtonGreen from './CoolButtonGreen'

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormField label="email" type="text" placeholder="youremail@youremail"></FormField>
        <FormField label="name" type="text" placeholder="Your name"></FormField>
        <FormField label="password" type="password" placeholder="Password"></FormField>
        <CoolButtonGreen name="Submit"></CoolButtonGreen>
      </div>
    )
  }
}
