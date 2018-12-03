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
       
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <div>
       <FormField />
       </div>
        </header>
        {/* <div>{FormField}</div> */}
        
      </div>
      
    );
  }
}

export default App;
