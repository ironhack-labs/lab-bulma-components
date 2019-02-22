import React, { Component} from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message';
import Container from './Container';


export default class SignUp extends Component {

  render() {
    return (
      <Container>
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password"/>
          <CoolButton isSmall isPrimary className="is-rounded my-class">Submit</CoolButton>
        </form>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>  
    )
  }
}