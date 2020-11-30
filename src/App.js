import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar.js";
import FormField from './formField/FormField.js';
import CoolButton from './coolButton/CoolButton.js';
import Signup from './Signup.js';

const App = () => {
  return (
    <div>
      <Navbar/>
  
      <FormField
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
      />
  
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      {/* <CoolButton
        // label="button2"
        // buttonName="Button 2"
      /> */}

      <Signup/>

    </div>
  )
};



export default App;
