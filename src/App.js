import React from 'react';
import './App.css'
import Navbar from './navbar/Navbar';
import FormField from './formfield/Formfield';
import CoolButton from './coolbutton/CoolButton';

const App = () => {
  return (
  <div>
    <Navbar></Navbar>
    <FormField label="Name" type="text" placeholder="Choose Username" />
    <FormField label="Email" type="email" placeholder="e.g. Username@gmail.com" />
    <CoolButton isDanger isRounded>Button 1</CoolButton>
    <CoolButton isSuccess >Button 2</CoolButton>
  </div>);
  

};

export default App;
