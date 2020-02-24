import React, { Component } from 'react'
import Navbar from './Navbar';
import FormField from "./FormField";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    )
  }
}
