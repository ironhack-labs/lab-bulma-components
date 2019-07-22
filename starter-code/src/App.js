import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Container from './components/Container';
import Message from './components/Message';


function App() {
  return (
    <div>

        <Navbar />
    <Container >
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger isRounded name="Clear" />
        <CoolButton isSmall isSuccess name="Submit" />
        <br />
        <br />
        <h3>Sign up Now</h3>
    </Container>
        <Signup />
        <br />
        <br />
      <Container>
      <Message color="is-info" title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </div>
  );
}

export default App;
