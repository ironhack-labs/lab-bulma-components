import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Signup />
        <Message titulo="Esto es un titulo" cuerpo="Contenido del mensaje" />
      </div>
    );
  }
}

export default App;
