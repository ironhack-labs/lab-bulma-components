import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import {CoolButton} from './CoolButton/CoolButton';
import Signup from './signup/Signup';

const App = () => {
 return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton text="Button 1" isDanger isSmall />
      <CoolButton text="Button 2" isDanger isSmall />
      <Signup/>
    </div> 
  )
};

export default App;
