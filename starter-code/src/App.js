// import "./App.css";

import React, {Component} from 'react'
import Navbar from "./Navbar.js";
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import "./App.css";

import 'bulma/css/bulma.css';


function App() {
  return (
    <div>
     <Navbar />

     <FormField />  
    </div>
  )
}

export default App;
