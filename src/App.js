import React from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton.js';

const App = () => {
  return (
    <main>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      
      
    </main>
)
};

export default App;
