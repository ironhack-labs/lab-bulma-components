import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formfield from './components/formfield'
import Navbar from './components/Navbar'
import Coolbutton from './components/Coolbutton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Formfield  />
      <Coolbutton />
      </header>
      
        
    </div>
    
  );
 
}

export default App;
