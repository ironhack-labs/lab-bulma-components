import React from 'react';
import 'bulma/css/bulma.css';
import './App.css'

import Container from './container/Container'
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import SignUp from './signup/SignUp';
import Message from './message/Message';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <SignUp />
      </Container>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </main>
  )
};

export default App;