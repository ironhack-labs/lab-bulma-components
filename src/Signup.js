import React, { Component } from 'react'
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import Navbar from "./Navbar"
import Container from "./Container"

export default class Signup extends Component {
  render() {
    return (
      <div>
          <div className="forms">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
          <div className="buttons">
            <CoolButton className="button is-rounded my-class is-small is-danger">Button 1</CoolButton>
            <CoolButton className="button is-small is-success">Button 2</CoolButton>
          </div>
      </div>
    )
  }
}
