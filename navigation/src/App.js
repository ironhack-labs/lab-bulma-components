import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import FormField from './FormField.js'
import Signup from './Signup.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Signup/>



      </div>
    );
  }
}

export default App;
