import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './CoolButton/CoolButton.js';
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    </div>
    
  )
  
};

export default App;
