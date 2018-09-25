import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import Formfield from './Formfield';


class App extends Component {
  render() {
    return (
      <div className="App">

<Navbar/>
<Formfield/>

      </div>
    );
  }
}

export default App;
