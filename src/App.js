import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js'
import './formfield/FormField.js'
import FormField from './formfield/FormField.js';

const App = () => {
  return (
  <div>
    <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

  </div>
  );
};

export default App;
