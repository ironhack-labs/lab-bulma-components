import React, { Component } from "react";
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Container from './Container';


class Signup extends Component {

render () {
  return (
    <div>
      <Navbar />
      <Container>
      <form>
        <FormField label="Name" type="text" placeholder="e.g Garrisson Johnson"/>
        <FormField label="Email" type="email" placeholder="e.g gaz-johnson@cool.com"/>
        <FormField label="Password" type="password" placeholder="PasswordAsStrongAsGarryJohnson"/>
        <CoolButton isRounded isSuccess name="Submit"/>
      </form>
      </Container>
    </div>
  )
}
}


export default Signup

