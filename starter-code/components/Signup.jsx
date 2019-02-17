import React, { Component } from 'react';
import FormField from './FormField';
import Navbar from './Navbar';
import CoolButton from './CollButton';
import Container from './Container';
import Message from './Message';


export default function Signup() {
  return (
    <div>
      <Navbar />
      <Container>
        <Message isInfo title="Hello World">
          Welcome to my
          <strong> application</strong>
          .
        </Message>
        <FormField label="Name" type="text" placeholder="insert name here" />
        <FormField label="Email" type="email" placeholder="inser e-mail here" />
        <FormField label="Password" type="password" placeholder="insert password here" />
        <CoolButton isSmall isSuccess className="is-rounded my-class">Submit</CoolButton>
      </Container>
    </div>
  );
}
