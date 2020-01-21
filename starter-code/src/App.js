import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';
import Signup from './components/Signup.js';


class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="container">
        <Signup/>
      </div>
    )
  }
}

export default App;


