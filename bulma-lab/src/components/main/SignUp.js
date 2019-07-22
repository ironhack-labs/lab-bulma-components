import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../layout/Navbar';
import FormField from '../other/FormField';
import CoolButton from '../other/CoolButton';


class Main extends Component {

  render(){

  


  return (

    <div> 
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Name" type="password" placeholder="password" />
      <CoolButton>Sign UP</CoolButton>
    </div>
    
  );
  }
}

export default Main;