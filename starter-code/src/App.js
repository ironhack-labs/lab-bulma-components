import Navbar from "./Navbar"
import FormField from "./FormField" 
import CoolButton from "./CoolButton";

import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder=""/>
        <CoolButton className="button is-small is-success">Submit</CoolButton>
      </div>
    )
  }
}

