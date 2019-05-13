import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './Formfield';
import CoolButton from './CoolButton';
import Message from './Message'

function App() {
  return (
    <div className="App">
    <Navbar />
    <FormField/>
    <br></br>
    <button class="button is-rounded is-info is-outlined">Submit</button>
    <br></br><br></br>
    <Message/>
    </div>
  );
}

export default App;
