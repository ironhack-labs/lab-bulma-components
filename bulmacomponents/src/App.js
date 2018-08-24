import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './Navbar';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Form className="margen"></Form>
        
      </div>
    );
  }
}

export default App;
