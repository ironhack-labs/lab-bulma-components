// import "./App.css";

import React, {Component} from 'react'
import Navbar from "./Navbar.js";
import "./App.css";
import 'bulma/css/bulma.css';
import FormField from './FormField.js';

function App() {
  return (
    <div>
     <Navbar />

     <FormField />  
    </div>
  )
}

export default App;
