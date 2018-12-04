import React, { Component } from 'react'    
import Navbar from '../navbar/navbar';
import FormField from '../formField/formField'
import CoolButton from '../coolButton/coolButton';
import Message from '../message/message';
export default class Signup extends Component {
     
  render() {
    return (
      <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      
      </div>
    )
  }
}
