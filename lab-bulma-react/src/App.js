import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <button></button>
    <button></button>
    </div>
  );
}

/**/


export default App;
