import React, { Component } from 'react';
import './App.css'
import Navbar from './Navbar'
import FormField from './FormField.js'

class Signup extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="Alex Rojas"   />
        <FormField label="Email" type="email" placeholder="Alex@gmail.com"   />
        <FormField label="Password" type="password" placeholder="*******"   />
      </div>


    )
  }
}

export default Signup
