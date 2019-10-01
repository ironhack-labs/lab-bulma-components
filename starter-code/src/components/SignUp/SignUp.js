
import React, { Component } from 'react'
import FormField from "../FormField/FormField";
import CoolButton from '../CoolButton/CoolButton';
import './SignUp.css'

export default class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <form action="/" className='SignUp'>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
        <CoolButton isPrimary>Submit</CoolButton>
        </form>
      </React.Fragment>
    )
  }
}