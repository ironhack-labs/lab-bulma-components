import React from 'react';
import './App.css';
import Navbar from './navbar/navbar'
import FormField from './formField/formField'
import CoolButton from './coolButton/coolButton';
import Signup from './signUp/signUp'
import Message from './message/message'

function App() {
  return (
    <>

      <Navbar></Navbar>
      <FormField text='Name' type='text' placeholder='e.g Alex Smith'></FormField>
      <FormField text='Email' type='email' placeholder='e.g. alexsmith@gmail.com"'></FormField>

      <CoolButton name='Button 1' type=' button is-rounded my-class is-danger'></CoolButton>
      <CoolButton name='Button 2' type=' button is-success'></CoolButton>
      <Signup></Signup>
    <Message></Message>
    </>
  );
}

export default App;
