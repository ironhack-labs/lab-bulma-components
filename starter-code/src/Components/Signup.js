import React, { Component } from 'react'
import Navbar from "./Navbar";
import Form from './Form';
import Buttons from "./Buttons";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <Form /> 
        <Buttons />
        
      </div>
    )
  }
}
