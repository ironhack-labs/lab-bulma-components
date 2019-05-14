import React, { Component } from 'react';
import Nav from './Navbar.js';
import CoolButton from './CoolButton.js';
import FormField from './FormField.js';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField name="Name" placeholder="e.g Alex Smith" />
        <FormField name="Email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField name="Password" placeholder="Type password..." />
        <br />
        <CoolButton className="is-info" name="Submit" />
      </div>
    );
  }
}
