import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './CoolButton/Coolbutton.js'

class Signup extends Component {
    render(){
    return(<div>
    <Navbar/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
   
    </div>)
  }};
  
  export default Signup;