import React from 'react';
import './App.css';
import NavBar from './components/navbar.js';
import FormField from './components/fields.js';
import CoolButton from './components/buttons.js';
import Signup from './components/signup';

function App() {
  return (

    <div>
    <Signup />
    {/* <NavBar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
    </div>
  );
}

export default App;
