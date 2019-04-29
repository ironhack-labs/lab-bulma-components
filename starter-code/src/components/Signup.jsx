import React, { Component } from 'react'
import FormField from "./FormField"
import CoolButton from "./CoolButton"

export default class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Password" type="password" placeholder="password" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isSuccess>Signup</CoolButton>
      </div>
    )
  }
}
