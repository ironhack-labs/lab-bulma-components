import React, { Component } from 'react'
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from './CoolButton';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <FormField/>
        {/* <CoolButton/> */}
      </div>
    )
  }
}
