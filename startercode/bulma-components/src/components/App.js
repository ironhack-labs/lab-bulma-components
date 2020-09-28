import React from 'react';

import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'


function App() {
  return (
    <>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <h3> Hola que tal</h3>
      <CoolButton size= 'isSmall' color='isDanger' className = 'is-rounded my-class'>Button1</CoolButton>


    </>
  );
}

export default App;
