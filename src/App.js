import React from 'react';
import NavBar from './NavBar/NavBar.js';
import 'bulma/css/bulma.css';
import FormField from './FormField/FormField.js';
import CoolButton from './CoolButton/CoolButton.js';
import Signup from './Signup/Singnup.js';


const App = () => {
  return (
    <>
      <NavBar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="E-mail" type="e-mail" placeholder="e.g. alexsmith@gmail.com"/>
      <CoolButton isPrimary isDanger className="is-rounded my-class">Button 1</CoolButton>
      <Signup/>
    </>
  )
};

export default App;
