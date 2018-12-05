import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar message='hello mr grubbs'/>
        
      </div>
    );
  }
}

export default App;
