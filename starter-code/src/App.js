
import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import NavBar from './NavBar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'
import 'bulma/css/bulma.css'
import SignUp from './SignUp';

class App extends Component {
  

  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  };
};

export default App;
