import React, {Component} from 'react';
import  './App.css';
import Form from './Components/Form.js';
import Navbar from "./Components/Navbar.js";
import Buttons from "./Components/Buttons.js"
import Signup from "./Components/Signup.js";



export default class App extends Component {
  render() {
    return (
      <div>
        
        <Signup />

      </div>
    )
  }
}

