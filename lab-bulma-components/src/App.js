import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FormField from './FormField';
import State from './State';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
       

          <div>
       <FormField />
       </div>
        </header>
        
        <State />
      </div>
      
    );
  }
}

export default App;
