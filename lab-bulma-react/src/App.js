import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <Signup />
    </div>
  );
}

export default App;
