import React, { Component, Fragment } from "react";
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Type your Password" />
        <CoolButton isSmall isSuccess className="is-rounded my-class">
          Submit
        </CoolButton>
      </Fragment>
    );
  }
}

export default Signup;



{/*A Navbar
A form with
A FormField for name
An FormField for email
A FormField for password
A CoolButton for submitting the form*/}