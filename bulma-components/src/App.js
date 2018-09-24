import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import FormField from './components/FormField/FormField';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
    );
  }
}

export default App;
