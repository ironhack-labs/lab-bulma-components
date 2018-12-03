import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';


class App extends Component {

  state = {

    styles : {
      color:"blue",
      backgroundColor:'lightblue',
      padding:'20px'
    }
  }

  changeStyles = () => {
    this.setState({
      styles: { 
        color:"#"+((1<<24)*Math.random()|0).toString(16),
        backgroundColor:"#"+((1<<24)*Math.random()|0).toString(16),
        padding: '20px'
      }
    })
  }

  render() {

    return (
      <div>
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        
        <CoolButton changeStyles={this.changeStyles} styles={this.state.styles}>COOL</CoolButton>
      </div>
      
    );
  }
}

export default App;
