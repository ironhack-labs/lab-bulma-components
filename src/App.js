import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'
import FormField from './formField/FormField.js'
import CoolButton from './buttons/CoolButton.js'


const App = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      <FormField label="Password" type="password" placeholder="password" /> 
      <CoolButton isSmall isDanger isCentered className="is-rounded my-class" /> 
    </>
  )
}

export default App;
