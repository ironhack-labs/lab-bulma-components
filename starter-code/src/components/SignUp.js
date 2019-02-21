import React, { Component } from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import Container from './Container'
import Message from './Message'
import './SignUp.css';

export default class Signup extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
          <Container>
            <FormField />
            <Message isInfo title="Hello world">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              <strong>Pellentesque risus mi</strong>.
            </ Message>
          </ Container>
      </ React.Fragment>
    );
  }
}