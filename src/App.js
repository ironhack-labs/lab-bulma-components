import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'
import './App.css'
import Signup from './signup/Signup.js';

const App = () => {
  return (

    <div className="div-mother">

  <Navbar></Navbar>
  <FormField />
    <CoolButton/>
    {/* <Signup/> */}
    </div>
    );

  
  
};

export default App;
