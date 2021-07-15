import React from 'react';
import FormField from './formfield/FormField.js';
import NavBar from './navbar/Navbar.js';
import CoolButton from './CoolButton/CoolButton.js'
import Signup from './Signup/Signup.js';

const App = () => {
  return (
  /*   <div>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div> */
    <Signup/>
  );
};

export default App;

