import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FormField from './FormField';

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
        
      </div>
      
    );
  }
}

export default App;
