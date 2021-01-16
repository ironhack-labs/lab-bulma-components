import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar} from './navbar/Navbar.js';
import {FormField} from './formfield/FormField.js'


const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Content</h1>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
};

export default App;
