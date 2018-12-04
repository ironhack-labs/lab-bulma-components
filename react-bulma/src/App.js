import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class App extends Component {
  state = {
    theStyle: {
      color: 'red',
      backgroundColor: 'blue'
    }
  }

  changeStyle = ()=>{
    this.setState({
      theStyle: {
        color: 'blue',
        backgroundColor: 'green'
      }
    })

  }



  render() {
    return (
      <div className="App">
      <Navbar message="welcome"/>

      <FormField label="Name" placeholder="Javier"/>
      <FormField label="Email" placeholder="javier@gmail.com"/>

      <CoolButton changeStyle={this.changeStyle} theStyle={this.state.theStyle} superText="PUSH"/>
      </div>
    );
  }
}

export default App;
