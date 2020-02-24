import React from 'react';
import Nav from './components/Navbar'
import FormField from './components/FormField.js'
import CoolButton from './components/CoolButton.js'
import Signup from './components/Singup.js'
import Container from './components/Container.js'
import Message from './components/Message.js'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <hr></hr>
      <CoolButton class="button is-small is-danger is-rounded my-class" name="Button 1" />
      <CoolButton class="button is-small is-success" name="Button 2" />
      <hr></hr>
      <Signup />
      <hr></hr>
      <Container />
    </>
  )
}

export default App;
