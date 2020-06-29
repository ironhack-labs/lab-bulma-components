import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'
import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="hi@aol.com" />
      <CoolButton isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSuccess>Button 2</CoolButton>
    </div>
  )

};

export default App;
