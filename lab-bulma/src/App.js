import React, { Component } from "react";
import Signup from './signup/signup';
import Message from './message/message';
import './App.css';

class App extends Component {
  render() {   
    return ( 
    <div>
      <Signup />
      <Message />
    </div>
    );
  }
}

export default App;
