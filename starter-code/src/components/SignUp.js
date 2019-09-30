
import React, { Component } from 'react'
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from './CoolButton';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <form action="/">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
        <CoolButton isPrimary>Submit</CoolButton>
        </form>
      </div>
    )
  }
}