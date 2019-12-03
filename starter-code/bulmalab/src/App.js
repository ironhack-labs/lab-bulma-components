import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'

function App() {
  return (
 <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton className="button is-rounded my-class is-danger is-small" name="button1" />
      <CoolButton className="button is-small is-success"name="button2"/>
      </>
  );
}

export default App;
