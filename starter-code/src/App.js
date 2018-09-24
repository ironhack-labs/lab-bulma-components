import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton';
import Formfield from './Formfield';
import Navbar from './Navbar'
import Signup from './Signup'
// import bulmaButtons from './index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup/>
      </div>
    );
  }
}

export default App;
