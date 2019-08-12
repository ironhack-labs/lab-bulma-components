import React from 'react';
import logo from './logo.svg';
import './App.css';

/* --- Custom components --- */
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton';

function App() {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      <div>
        <CoolButton className="button is-small is-danger is-rounded my-class" name="Button 1"/>
        <CoolButton className="button is-small is-success" name="Button 2"/>
      </div>
    </div>

  )
}

export default App;
