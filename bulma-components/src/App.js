import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import SignUp from "./components/SignUp";
import Message from "./components/Message"


function App() {
  return (
  <>
  <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
      <CoolButton className="button is-small is-success">Button 2</CoolButton> 
      <Message isInfo title="Hello World" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi." />
  
  </>
  )
}

export default App;
