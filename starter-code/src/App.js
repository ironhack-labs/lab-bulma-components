import React, { Component } from 'react'
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButtonGreen from './CoolButtonGreen'
import CoolButtonRed from './CoolButtonRed';
import Signup from './Signup';


export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormField></FormField>
        <CoolButtonGreen name="verde"></CoolButtonGreen>
        <CoolButtonRed name="rojo"></CoolButtonRed>
        <Signup></Signup>
      </div>
    )
  }
}
