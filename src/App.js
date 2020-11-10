import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './CoolButton/CoolButton.js';
import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <div class="Form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
      <CoolButton isLarge isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isLarge isSuccess>Button 2</CoolButton>
      </div>
    </div>
    
  )
  
};

export default App;
