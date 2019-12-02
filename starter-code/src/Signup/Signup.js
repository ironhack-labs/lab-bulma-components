import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../Button/CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div className='control'>
        <Navbar></Navbar>
        <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
        <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField label='Password' type='password' placeholder='password' />
        <CoolButton className='is-small is-link button'>Submit</CoolButton>
      </div>
    );
  }
}
