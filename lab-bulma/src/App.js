import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Component/NavbarComp'
import FormField from './Component/FormField'
import CoolButton from './Component/CoolButton'

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <NavbarComponent />
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <FormField  />
        <CoolButton/>
      </header>

    </div>
  );
}

export default App;
