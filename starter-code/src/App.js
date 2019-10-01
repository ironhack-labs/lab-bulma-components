import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import FormField from './components/FormField.jsx';
import CoolButton from './components/CoolButton.jsx';




class App extends Component {
    render() {
      return (
        <div className="App">
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class" buttonName = "Button 1">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      );
    }
  }
  





  export default App;

