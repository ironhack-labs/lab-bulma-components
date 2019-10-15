import React, { Component, Fragment } from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './Button.js';
import Container from './Container.js';

class Signup extends Component {
  render() {
    return (
  <Fragment>
    <Navbar/>
    <Container>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="e.g. *********" />
    <CoolButton isPrimary >Sign up</CoolButton>
    </Container>
  </Fragment>
)}
}

export default Signup;
