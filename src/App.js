import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger='is-danger' className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess='is-success'>Button 2</CoolButton>
    </div>
  )
  
};

export default App;
