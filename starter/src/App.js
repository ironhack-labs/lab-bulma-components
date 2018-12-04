import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButtons from './CoolButtons.js'

class App extends Component {
state = {
      name: 'Angel',
      styling : {
        backgroundColor: '#276cda' ,
        borderRadius: '3px',
        color: 'white',
        border: '1px solid black',
        textDecoration: 'none',
      },
}
      changeStyles = () => {
        this.setState({
          name:'This is Cool',
          styling:{
            backgroundColor: 'red'
          }
        })

      }


  render() {

    return (
      <div>
          <Navbar/>
          <FormField labelName="Name: " placeholder='Ross from props'/>
          <FormField labelName="Email: " placeholder='Isaish from props' />
          <CoolButtons changeStyles={this.changeStyles} styling={this.state.styling}>Push to Change Color</CoolButtons>
      </div>
    );
  }
}

export default App;
