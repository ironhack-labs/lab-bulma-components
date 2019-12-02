import React from 'react';
import Navbar from './NavbarComponent';
import FormField from './FormFieldComponent';
import CoolButton from './CoolButtonComponent';
import Container from './ContainerComponent';
import Message from './MessageComponent';

function SignupComponent() {
  return(
    <div>
      <Navbar/>
      <Container>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="" />
        <CoolButton isSmall isSuccess isLight>Signup</CoolButton>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>   
    </div>
  )
}

export default SignupComponent;