import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import SignUp from "./SignUp"
import Message from "./Message.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <FormField  />
      <br></br>
      <SignUp />
      <br></br>
      <br></br>
      <div class="message">
      <Message />
      </div>
      
      </header>
    </div>
  );
}

export default App;
