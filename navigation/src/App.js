import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import FormField from './FormField.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

      <FormField label="Name" type="text" placeholder="Alex Rojas"   />
      <FormField label="Email" type="email" placeholder="Alex@gmail.com"   />
      <FormField label="Password" type="password" placeholder="*******"   />





      </div>
    );
  }
}

export default App;
