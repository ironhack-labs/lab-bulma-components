import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import Container from './components/Container';
import NavBar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import SignupForm from './components/Signup';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormField name="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField name="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>

        <h3>Sign up here</h3>

        <SignupForm />

        <Container>
          <Message color="is-info" title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </Message>
        </Container>
      </div>
    );
  }
}

export default App;
