import React from 'react';
import Navbar from "./navbar/Navbar.js"
import FormField from "./FormField/FormField.js"
import Signup from './Signup/Signup.js';


const App = () => {
  return (

    <div className = "App">
      
      <Navbar />
      <FormField label='Name' type='text' placeholder='e.g. Alex Smith' />
      <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
      <Signup />
    </div>

  )
  
};

export default App;
