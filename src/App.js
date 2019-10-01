import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Formfield from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Formfield  theLabel="Name" type="text" placeholder="e.g Randy Dandy"/>
      <Formfield  theLabel="Email" type="email" placeholder="e.g randy@gmail.com"/>
      <CoolButton className="is-success">Button 1</CoolButton>
      <CoolButton className="is-danger">Button 2</CoolButton>
      <br></br>
      <br></br>
      <Signup />
    </div>
  );
}

export default App;
