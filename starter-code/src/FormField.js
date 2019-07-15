import React, { Component } from 'react'
import CoolButton from "./CoolButton"

export default class FormField extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className="formField">
        <label className="label">Name</label>
        <input className="input is-rounded" type="text" placeholder="e.g Jon Snow"></input>
        <label className="label">Email</label>
        <input className="input is-rounded" type="email" placeholder="e.g jonsnow@hotmail.com"></input>
        <label className="label">Password</label>
        <input className="input is-rounded" type="password" placeholder="12345678"></input>
        <CoolButton buttonType="button is-success is-focused" title="Signup/Submit"/>

      </div>
    )
  }
}
