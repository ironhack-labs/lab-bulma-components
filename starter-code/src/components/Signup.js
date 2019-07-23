import React, {Component, Fragment} from "react";
import Nav from './Nav.js';
import Container from './Container.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import Message from './Message.js';

const Signup = () => {
  return (
    <Fragment>
      <Nav />
      <Container>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isSuccess className="is-rounded my-class">Submit</CoolButton>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </Fragment>
  )
}


export default Signup;
