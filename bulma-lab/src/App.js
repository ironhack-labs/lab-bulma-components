import React from 'react';
import Navbar from './components/navbar';
import FormField from './components/formfield';
import CoolButton from './components/coolbutton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      < Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      < CoolButton isSmall isDanger className = "is-rounded my-class" btnName="Button 1"/>
      < CoolButton isSmall isSuccess btnName = "Button 2"/> 
    </div>
  );
}

export default App;
