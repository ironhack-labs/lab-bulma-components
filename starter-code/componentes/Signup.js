import React, { Component, Fragment } from 'react';
import CoolButton from './button/CoolButton';
import Nav from './Nav';
import FormField from './Input/FormField';
import Container from './container/Container';


const Signup = () => {
  return (
    <Fragment>
      <Nav />
      <Container>
        <form className="container">
          <FormField label="Name" type="text" placeholder="E.g. Jonh Snow" />
          <FormField label="Email" type="email" placeholder="E.g. snow@nightwatch.com" />
          <FormField label="Password" type="text" placeholder="E.g. ********" />
          <CoolButton className="button is-small is-success">Submit</CoolButton>
        </form>
      </Container>
    </Fragment>
  )
}

export default Signup;