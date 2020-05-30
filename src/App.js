import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import './navbar/Navbar.css';
import FormField from './formfield/FormField';
import './formfield/FormField.css';
import CoolButton from './coolbutton/CoolButton';
import './coolbutton/CoolButton.css';


const App = () => (
  <div className='App'>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <div id="Buttons">
      <CoolButton className="button is-small is-danger is-rounded my-class" button="Button 1"></CoolButton>
      <CoolButton className="button is-small is-success my-class" button="Button 2">Button 2</CoolButton>
    </div>
  </div>
  );


export default App;
