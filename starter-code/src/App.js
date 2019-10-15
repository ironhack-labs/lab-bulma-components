import React, { Component, Fragment } from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './Button.js';
import Container from './Container.js';
import ButtonGroup from './ButtonGroup.js';
import Message from './Message.js';

class App extends Component {
  render() {
    return (
  <Fragment>
    <Navbar/>
    <Container>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <ButtonGroup>
      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </ButtonGroup>
    </Container>
    <Container>
    <Message isInfo title="Hello World">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
    </Container>
  </Fragment>
)}
}

export default App;


