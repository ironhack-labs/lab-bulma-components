import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from "./CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. 1234" />
        <CoolButton className="button is-small is-success" name="Submit"/>
        

      </div>
    )
  }
}
